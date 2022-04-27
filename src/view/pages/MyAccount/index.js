import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { Button, Switch } from "../../components";

import { useSelector } from "react-redux";

const MyAccount = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const { currentUser } = useSelector((state) => state.application);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row h-24  rounded-lg ">
        <RiAccountCircleLine className="mt-5 mb-5 ml-5 " size="4rem" />
        <div className="mt-10 ml-2">Hi, {currentUser.first_name}</div>
      </div>
      <div className="flex flex-col  w-full sm:flex-row">
        <div className="bg-purple-50 shadow w-full sm:w-2/3 sm:h-48 sm:rounded-lg mr-5">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Your account information
            </h3>
          </div>
          <div className="border-lg border-gray-200">
            <div>
              <div className="bg-purple-100 px-4 py-5 sm:gap-4 sm:px-6">
                <div className="text-sm font-medium text-gray-500">
                  Full name
                </div>
                <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                  {currentUser.first_name} {currentUser.last_name}
                </div>
              </div>
              <div className="bg-purple-50 px-4 py-5  sm:gap-4 sm:px-6">
                <div className="text-sm font-medium text-gray-500">
                  Email address
                </div>
                <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                  {currentUser.email}
                </div>
              </div>
              <div className="bg-purple-100 px-4 py-5  sm:gap-4 sm:px-6">
                <div className="text-sm font-medium text-gray-500">
                  Phone nummber
                </div>
                <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                  {currentUser.phone_number}
                </div>
              </div>
              <div className="bg-purple-50 px-4 py-5 sm:gap-4 sm:px-6">
                <div className="text-sm font-medium text-gray-500 tex">
                  Card
                </div>
                <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                  {currentUser.order_a_card}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-purple-50 shadow w-full text-center mt-5 sm:w-1/3 sm:h-90 sm:mt-0 overflow-hidden sm:rounded-lg mb-5">
          <Switch
            value={toggleSwitch}
            onChange={() => setToggleSwitch(!toggleSwitch)}
          />

          {toggleSwitch ? (
            <>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium  text-gray-900">
                  Your booking information
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <div>
                  <div className="bg-purple-100 px-4 py-5  sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Parking City
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                      (Cluj/Timisoara/Brasov)
                    </div>
                  </div>
                  <div className="bg-purple-50 px-4 py-5  sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Parking name
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                      Viteazu/Iacu/Central
                    </div>
                  </div>
                  <div className="bg-purple-100 px-4 py-5 sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Address
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                      Republicii 102
                    </div>
                  </div>
                  <div className="bg-purple-50 px-4 py-5  sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Time:{" "}
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                      16:00-18:00
                    </div>
                  </div>
                  <div className="bg-purple-100 px-4 ">
                    <div className="text-lg text-gray-500">
                      Enjoy your booking
                    </div>
                  </div>
                  <div className="bg-purple-100 ">
                    <div className="text-base text-gray-500">or</div>
                  </div>
                  <div className="bg-purple-100 px-4 ">
                    <div className="text-sm font-medium text-gray-500 ">
                      <Button
                        onClick={() => console.log("Click3")}
                        className="bg-red-400 text-white mb-2"
                      >
                        Cancel your booking
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium  text-gray-900">
                  Your booking history
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <div>
                  <div className="bg-purple-100 px-4 py-5  sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Parking City
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                      (Cluj/Timisoara/Brasov)
                    </div>
                  </div>

                  <div className="bg-white px-4 py-5  sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Parking name
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                      Viteazu/Iacu/Central
                    </div>
                  </div>
                  <div className="bg-purple-100 px-4 py-5 sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Address
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                      Republicii 102
                    </div>
                  </div>

                  <div className="bg-white px-4 py-5  sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Date
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                      22/11/2022
                    </div>
                  </div>
                  <div className="bg-purple-100 px-4 py-5  sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Time:
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                      16:00-18:00
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default MyAccount;
