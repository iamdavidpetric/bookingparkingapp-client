import { useEffect, useState } from "react";

import { Card, Progressbar } from "../../components";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [selectedUser, setSelecterdUser] = useState({});

  const API = "https://jsonplaceholder.typicode.com";
  const API2 = "https://reqres.in/api";

  const USERS_ENDPOINT = "/users";
  const ALBUMS_ENDPOINT = "/albums";

  useEffect(() => {
    fetch(`${API2}${USERS_ENDPOINT}`)
      .then((res) => res.json())
      .then((json) => setUsers2(json.data));

    fetch(`${API}${ALBUMS_ENDPOINT}`)
      .then((orice) => orice.json())
      .then((albums) => setAlbums(albums));

    fetch(`${API}${USERS_ENDPOINT}`)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  const fetchSelectedUser = (id) => {
    fetch(`${API2}${USERS_ENDPOINT}/${id}`)
      .then((res) => res.json())
      .then((json) => setSelecterdUser(json.data));
  };

  return (
    <div>
      {users.map((user) => user.name)}
      <Card
        href="https://www.google.com"
        title="Cluj Napoca"
        src={`https://i.guim.co.uk/img/media/ccc826cd2961f5dc64b3e1283ac4224eab46a77f/0_383_5746_3448/master/5746.jpg?width=1020&quality=85&auto=format&fit=max&s=968f9b9234aadb3f5bc5e7bc289fa7ca`}
      >
        <Progressbar percentage={29} color="blue" />
        Parcare Mihai Viteaza
      </Card>
      {albums.map((album) => album.title)}
      <Card
        href="https://www.google.com"
        title="Brasov"
        src={`https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/10/brasov-min.jpg`}
      >
        <Progressbar percentage={9} color="red" />
        Parcare Republicii
      </Card>
      {users2.map((data) => data.email)}
      <Card
        href="https://www.google.com"
        title="Timisoara"
        src={`https://www.romaniajournal.ro/wp-content/uploads/2015/09/twa_blogpic_timisoara-4415.jpg`}
      >
        <Progressbar percentage={60} color="blue" />
        Parcare Dorobantilor
      </Card>
      {users2.map((user) => (
        <img
          alt="poza random"
          src={user.avatar}
          key={user.id}
          onClick={() => fetchSelectedUser(user.id)}
        />
      ))}
      {selectedUser.email}
    </div>
  );
};

export default Home;
