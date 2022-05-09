import { useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Creators } from "../../../logic/reducers/application";

import { Card, Progressbar } from "../../components";

const Home = () => {
  const { parkings } = useSelector((state) => state.application);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(process.env.REACT_API_URL + "/api/v1/parkings/").then((res) => {
      dispatch(
        Creators.updateProps({ parkings: Array.isArray(res) ? res.data : [] })
      );
    });
  }, [dispatch]);

  return (
    <div>
      {parkings.map((parking) => (
        <Card
          onClick={() =>
            navigate("/booking/" + parking.id + "/" + parking.city)
          }
          href="https://www.google.com"
          title={parking.city}
          src={parking.image_link}
          key={parking.id}
        >
          <Progressbar percentage={parking.ev_spots} color="bg-red-400" />
          {parking.name}
        </Card>
      ))}
    </div>
  );
};

export default Home;
