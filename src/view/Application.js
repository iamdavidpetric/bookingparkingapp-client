import { Footer, Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "../logic/routes";

const Application = () => {
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
