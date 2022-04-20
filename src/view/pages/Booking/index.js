import { useRef, useState, useEffect } from "react";

import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import ReactMapboxGl, { Marker, Popup } from "!react-mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import { Progressbar } from "../../components";

import "./style.css";
import "mapbox-gl/dist/mapbox-gl.css";

const Booking = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [value, onChange] = useState(new Date());

  const ref = useRef();
  const { id } = useParams();

  const [parking, setParking] = useState({});
  const API = "http://localhost:3000/api/v1/parkings/" + id;

  // useEffect(() => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((res) => setParking(res));
  // }, []);

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

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZGF2aWRwZXRyaWMzNSIsImEiOiJjbDFkbnBucmwwamNqM2Nucm1jMDhwaWhqIn0.1hXjv9UNEdSR7iUyPpoTXg",
  });

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
                style={`mapbox://styles/mapbox/streets-v9`}
                containerStyle={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Marker
                  onClick={() => console.log("ceva")}
                  coordinates={parking.coordinates}
                  anchor="bottom"
                >
                  <div className="marker" />
                </Marker>
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
