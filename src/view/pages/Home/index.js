import { Card, Progressbar } from "../../components";
// import { BOOKING_PATH } from "../../../logic/routes/paths";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Creators } from "../../../logic/reducers/application";
// import { data } from "autoprefixer";

const Home = () => {
  // const [parkings, setParkings] = useState([]);

  // const API = "http://localhost:3000/api/v1/parkings";
  const { parkings } = useSelector((state) => state.application);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/parkings/").then((res) => {
      dispatch(Creators.updateProps({ parkings: res.data }));
    });
  }, [dispatch]);

  const navigate = useNavigate();

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
