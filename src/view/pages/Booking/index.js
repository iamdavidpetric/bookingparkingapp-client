import { Progressbar } from "../../components";
import Calendar from "react-calendar";
import { useState } from "react";
import "./style.css";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Booking = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [value, onChange] = useState(new Date());
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
              <div className=" py-3">Cluj-Napoca</div>
              <div className="py-3 border-2">Parking CLuj Arena</div>
              <div
                onClick={() => setOpenCalendar(!openCalendar)}
                className="py-3 border-2 cursor-pointer "
              >
                Pick a date
              </div>
              {openCalendar && (
                <div>
                  <Calendar onChange={onChange} value={value} />
                </div>
              )}

              <div className=" py-3 border-2 ">Choose the hours</div>
            </div>
            <div className="w-2/3 h-96 bg-green-100 text-2xl text-center rounded-r-xl">
              <Map
                center={[23.5891462, 46.7703371]}
                zoom={[17]}
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                  height: "100%",
                  width: "100%",
                }}
              ></Map>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className=" mt-10 mr-2 rounded-xl bg-white w-2/4 h-72">
            <div className="mt-5 text-lg text-center">Parcare Brasov</div>

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
          <div className=" mt-10 ml-2 rounded-xl bg-white  w-2/4 h-72">
            <div className="mt-5 text-lg text-center">Parcare Timisoara</div>

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
