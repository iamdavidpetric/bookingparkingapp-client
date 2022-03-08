import { FaCarSide, FaPlug } from "react-icons/fa";
import { ImHome } from "react-icons/im";

const Help = () => {
  return (
    <div className="flex flex-col rounded-t-lg content-between">
      <div className=" text-white">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
          className="mt-4 w-full h-56 object-center object-cover rounded-lg"
        />
        <div className="flex justify-center items-center bg-purple-100 my-3 rounded-lg h-36 ">
          <div className="flex text-purple-500 items-center ml-4 ">
            <div className="bg-white p-3 hover:bg-purple-600 hover:text-white trasition duration-150 rounded-full">
              <FaPlug size="3rem" />
            </div>
            <div className="flex flex-col text-gray-800  ml-2 text-base mr-2">
              Get help with FleetCharge, hosting an EV fleet driver, charger
              instalation and more
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center text-3xl text-black ">
          <div className="flex justify-center  bg-purple-300 my-3 rounded-lg h-36 ">
            <div className="flex text-purple-600 items-center justify-center ml-4 ">
              <div className="bg-white  hover:bg-purple-600 hover:text-white trasition duration-150 p-3 rounded-full">
                <FaCarSide size="3rem" />
              </div>
              <div className=" text-gray-800  ml-2 text-base mr-2 ">
                Get help with finding spaces, how to use our platform, what to
                do in case of issues and more
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-purple-400 my-3 rounded-lg h-36 ">
            <div className="flex text-purple-600 items-center ml-4">
              <div className="bg-white  hover:bg-purple-600 hover:text-white trasition duration-150 p-3 rounded-full">
                <ImHome size="3rem" />
              </div>

              <div className="flex flex-col text-white  ml-2 text-base mr-2">
                Get help with setting up and managing your listing, see tips to
                make the mose of your spare and more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Help;
