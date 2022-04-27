import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import ReactMapboxGl, { Marker, Popup } from "!react-mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Creators } from "../../../logic/reducers/application";
import { Progressbar } from "../../components";

import "./style.css";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

const Booking = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [value, onChange] = useState(new Date());

  const ref = useRef();
  const { id } = useParams();

  // const [parking, setParking] = useState({});
  const API = "http://localhost:3000/api/v1/parkings/" + id;
  const { parking } = useSelector((state) => state.application);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/parkings/" + id).then((res) => {
      dispatch(Creators.updateProps({ parking: res.data }));
    });
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openCalendar && ref.current && !ref.current.contains(e.target))
        setOpenCalendar(false);
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [openCalendar]);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);
  });

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZGF2aWRwZXRyaWMzNSIsImEiOiJjbDFkbnBucmwwamNqM2Nucm1jMDhwaWhqIn0.1hXjv9UNEdSR7iUyPpoTXg",
  });

  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-full ">
        <div className="flex flex-col w-full mt-5 rounded-xl h-96 bg-white">
          <div className="flex flex-row ">
            <div className="divide-solid  w-1/3 h-96 text-center rounded-l-xl">
              <div className=" py-3">{parking.city}</div>
              <div className="py-3 border-2">{parking.name}</div>
              <div
                onClick={() => setOpenCalendar(!openCalendar)}
                className="wrapper py-3 border-2 cursor-pointer "
                ref={ref}
              >
                Pick a date
              </div>
              {openCalendar && (
                <div>
                  <Calendar onChange={onChange} value={value} />
                </div>
              )}

              <div className=" py-3 border-2 "></div>
            </div>
            <div className="w-2/3 h-96 bg-green-100 text-2xl text-center rounded-r-xl">
              <Map
                center={parking.coordinates}
                zoom={parking.zoom}
                style={`mapbox://styles/davidpetric35/cl2he4si8002516o6xctj2r8e`}
                containerStyle={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Marker
                  // onClick={() => console.log("cevava")}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(parking);
                  }}
                  coordinates={parking.coordinates}
                  anchor="bottom"
                >
                  <div className="marker" />
                </Marker>

                {selectedPark ? (
                  <Popup coordinates={parking.coordinates}>
                    <div> {parking.description}</div>
                  </Popup>
                ) : null}
              </Map>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className=" mt-10 mr-2 rounded-xl bg-white w-full h-72">
            <div className="mt-5 text-lg text-center">
              Parking {parking.name}
            </div>

            <div className="mt-5 mx-5">
              <Progressbar percentage={48} />
              Parcari normale
            </div>
            <div className="mt-5 mx-5">
              <Progressbar percentage={22} />
              Parcari premium
            </div>
            <div className="mt-5 mx-5">
              <Progressbar percentage={32} />
              Parcari ev
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Booking;
