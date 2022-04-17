import { Card, Progressbar } from "../../components";
import { BOOKING_PATH } from "../../../logic/routes/paths";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [parkings, setParkings] = useState([]);
  
  const API = "http://localhost:3000/api/v1/parkings";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setParkings(res));
  }, []);
  console.log(parkings);
  const navigate = useNavigate();
  return (
    <div>

      {parkings.map(parking => (
        <Card onClick={() => navigate(BOOKING_PATH)}
        href="https://www.google.com"
        title={parking.city}
        src={parking.image_link}>
          <Progressbar percentage={parking.ev_spots} color="red"  />
          {parking.name}
        </Card>
      ))}
      









      </div>
  );
};

export default Home;
