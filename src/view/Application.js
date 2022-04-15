import { Footer, Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import routes from "../logic/routes";

const Application = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [selectedUser, setSelecterdUser] = useState({});

  const API = "http://localhost:3000/api/v1/users";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  console.log(users);

  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <Navbar />
          <Routes>
            {routes.map((om) => (
              <Route
                path={om.path}
                key={om.path}
                element={<om.element />}
              ></Route>
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Application;
