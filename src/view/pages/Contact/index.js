import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaPencilAlt } from "react-icons/fa";
import { Button, Modal } from "../../components";

import "./style.css";
import { Fragment, useState } from "react";

const Contact = () => {
  const [openCallModal, setOpenCallModal] = useState(false);
  const [openMailModal, setOpenMailModal] = useState(false);
  const [openWriteModal, setOpenWriteModal] = useState(false);

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row ">
        <div className=" my-10 md:my-20 md:mr-10 md:w-1/3 w-3/3 rounded-lg border-purple-500 hover:border-2 bg-white h-96  ">
          <div className="flex flex-col items-center mt-24 text-purple-800 hover:text-purple-600 trasition duration-100">
            <FiPhoneCall size="6rem " />
            <div className=" mt-2 text-3xl text-black hover:text-gray-400 ">
              <Button
                onClick={() => {
                  setOpenCallModal(true);
                }}
              >
                Call us
              </Button>
            </div>
          </div>
        </div>
        <div className=" md:my-20 md:mr-10 md:w-1/3 w-3/3  rounded-lg border-purple-500 hover:border-2  bg-white h-96 ">
          <div className="flex flex-col items-center mt-24 text-purple-800 hover:text-purple-600 trasition duration-100 ">
            <FiMail size="6rem " />
            <div className=" mt-2 text-3xl text-black hover:text-gray-400">
              <Button
                onClick={() => {
                  setOpenMailModal(true);
                }}
              >
                Mail Us
              </Button>
            </div>
          </div>
        </div>
        <div className=" my-10 md:my-20 md:w-1/3 w-3/3 rounded-lg border-purple-500 hover:border-2  bg-white h-96">
          <div className="flex flex-col items-center mt-24 text-purple-800 hover:text-purple-600 trasition duration-100">
            <FaPencilAlt size="6rem " />
            <div className=" mt-2 text-3xl text-black hover:text-gray-400 ">
              <Button
                onClick={() => {
                  setOpenWriteModal(true);
                }}
              >
                Write us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal setVisible={setOpenCallModal} visible={openCallModal}>
        <div className="flex flex-col container  my-10 mr-36 w-3/3 rounded-lg border-purple-500 bg-white">
          <div className="flex flex-col items-center mt-5 mb-3 text-purple-800 hover:text-purple-600 ">
            <FiPhoneCall size="3rem " />
            <div className=" mt-2 text-3xl text-black">Call us </div>
            <div className="text-gray-500 text-xl">Our program</div>
            <div className="text-gray-500 mt-5">Monday-Friday</div>
            <div className="text-gray-500 "> 07:00-22:00</div>
            <div className="text-gray-500 mt-5">Saturday-Sunday</div>
            <div className="text-gray-500 "> 09:00-18:00</div>
            <div className="text-gray-600 mt-14 text-xl ">+5432145623</div>
            <div className="text-gray-600 mt-2 text-xl">+5432145623</div>
          </div>
        </div>
      </Modal>
      <Modal setVisible={setOpenMailModal} visible={openMailModal}>
        <div className="flex flex-col container my-20 mr-36 w-3/3 rounded-lg border-purple-500 bg-white">
          <div className="flex flex-col items-center mt-5 mb-3 text-purple-800 hover:text-purple-600">
            <FiMail size="3rem " />
            <div className=" mt-2 text-3xl text-black">Mail us </div>
            <div className="text-gray-500 text-xl">Our program</div>
            <div className="text-gray-500 mt-5">Monday-Friday</div>
            <div className="text-gray-500 "> 07:00-22:00</div>
            <div className="text-gray-500 "> david.petric99@gmail.com</div>
          </div>
        </div>
      </Modal>

      <Modal setVisible={setOpenWriteModal} visible={openWriteModal}>
        <div className=" container mx-auto rounded-lg border-purple-500 bg-white ">
          <div className="p-4 space-y-5 ">
            <h4 className="text-center text-3xl">Contact Us</h4>

            <form>
              <div className="grid grid-cols-1 gap-5 ">
                <input
                  type="text"
                  className="text-field col-span-5"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="text-field col-span-5 "
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="text-field col-span-5"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className="text-field col-span-5"
                  placeholder="Phone"
                />
                <textarea
                  cols="10"
                  rows="5"
                  className="text-field col-span-5"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <div className="flex flex-row mt-4 justify-center">
                <Button>Send Message </Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Contact;
