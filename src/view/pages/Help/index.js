import { Fragment, useState } from "react";
import { FaCarSide, FaPlug } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { Button, Modal } from "../../components";
import { CONTACT_PATH } from "../../../logic/routes/paths";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();
  const [openCarModal, setOpenCarModal] = useState(false);
  const [openOwnerModal, setOpenOwnerModal] = useState(false);
  const [openEvModal, setOpenEvModal] = useState(false);

  return (
    <Fragment>
      <div className="flex flex-col rounded-t-lg content-between">
        <div className=" text-white">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
            className="mt-4 w-full h-56 object-center object-cover rounded-lg"
          />
          <div
            onClick={() => {
              setOpenEvModal(true);
            }}
            className="flex justify-center items-center bg-purple-100 my-3 rounded-lg h-36 "
          >
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
            <div
              onClick={() => {
                setOpenCarModal(true);
              }}
              className="flex justify-center  bg-purple-300 my-3 rounded-lg h-36 "
            >
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
            <div
              onClick={() => {
                setOpenOwnerModal(true);
              }}
              className="flex justify-center items-center bg-purple-400 my-3 rounded-lg h-36 "
            >
              <div className="flex text-purple-600 items-center ml-4">
                <div className="bg-white  hover:bg-purple-600 hover:text-white trasition duration-150 p-3 rounded-full">
                  <ImHome size="3rem" />
                </div>

                <div className="flex flex-col text-white  ml-2 text-base mr-2">
                  Get help with setting up and managing your listing, see tips
                  to make the mose of your spare and more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal setVisible={setOpenEvModal} visible={openEvModal}>
        <div className="flex flex-col container my-20 mr-36 w-3/3 rounded-lg border-purple-500 bg-white">
          <div className="flex flex-col items-center mt-5 mb-3 text-purple-800 hover:text-purple-600">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaPlug size="3rem " />
            </div>
            <div className=" mt-2 text-3xl text-black">
              EV Drivers and Owners
            </div>
            <div className="text-gray-500 mt-5">text cu ceva</div>
            <div className="text-gray-500 "> text cu ceva</div>
            <div className="text-gray-500 mt-5">text cu ceva</div>
            <div className="text-gray-500 "> text cu ceva</div>

            <Button
              className="bg-white border-white hover:border-purple-600 hover:bg-white hover:text-purple-600 mt-2 "
              onClick={() => navigate(CONTACT_PATH)}
            >
              Need more help?
            </Button>
          </div>
        </div>
      </Modal>
      <Modal setVisible={setOpenCarModal} visible={openCarModal}>
        <div className="flex flex-col container  my-10 mr-36 w-3/3 rounded-lg border-purple-500 bg-white">
          <div className="flex flex-col items-center mt-5 mb-3 0 text-purple-800 hover:text-purple-600 ">
            <div className="bg-purple-100 p-3 rounded-full  ">
              <FaCarSide size="3rem " />
            </div>
            <div className=" mt-2 text-3xl text-black">Driver Help </div>
            <div className="text-gray-500 mt-5">text cu ceva</div>
            <div className="text-gray-500 "> text cu ceva</div>
            <div className="text-gray-500 mt-5">text cu ceva</div>
            <div className="text-gray-500 "> text cu ceva</div>

            <Button
              className="bg-white border-white hover:border-purple-600 hover:bg-white hover:text-purple-600 mt-2 "
              onClick={() => navigate(CONTACT_PATH)}
            >
              Need more help?
            </Button>
          </div>
        </div>
      </Modal>

      <Modal setVisible={setOpenOwnerModal} visible={openOwnerModal}>
        <div className="flex flex-col container my-20 mr-36 w-3/3 rounded-lg border-purple-500 bg-white">
          <div className="flex flex-col items-center mt-5 mb-3 text-purple-800 hover:text-purple-600">
            <div className="bg-purple-100 p-3 rounded-full">
              <ImHome size="3rem " />
            </div>
            <div className=" mt-2 text-3xl text-black">Owners Help </div>
            <div className="text-gray-500 mt-5">text cu ceva</div>
            <div className="text-gray-500 "> text cu ceva</div>
            <div className="text-gray-500 mt-5">text cu ceva</div>
            <div className="text-gray-500 "> text cu ceva</div>
            <Button
              className="bg-white border-white hover:border-purple-600 hover:bg-white hover:text-purple-600 mt-2 "
              onClick={() => navigate(CONTACT_PATH)}
            >
              Need more help?
            </Button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};
export default Help;
