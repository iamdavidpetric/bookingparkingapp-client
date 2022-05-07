import { Fragment, useState } from "react";

import { useSelector } from "react-redux";

import { Button, Modal } from "../../components";

import { FaPencilAlt } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";

import "./style.css";

const Contact = () => {
  const [openCallModal, setOpenCallModal] = useState(false);
  const [openMailModal, setOpenMailModal] = useState(false);
  const [openWriteModal, setOpenWriteModal] = useState(false);

  const { currentUser } = useSelector((state) => state.application);

  return (
    <Fragment>
      <div>
        <img
          src="https://i.imgur.com/1VdJIdm.png"
          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
          className="mt-4 w-full h-56 object-center object-cover rounded-lg"
        />
      </div>

      {currentUser.isLogged ? (
        <div className="flex flex-col md:flex-row ">
          <div
            onClick={() => {
              setOpenCallModal(true);
            }}
            className=" my-5 md:my-10 md:mr-10 md:w-1/3 w-3/3 rounded-lg border-purple-500 hover:border-2  md:bg-white bg-purple-100  h-48 md:h-96 "
          >
            <div className="flex flex-col items-center  mt-6 md:mt-24 text-purple-800 hover:text-purple-600 trasition duration-100">
              <FiPhoneCall className="p-4 md:p-0" size="6rem " />
              <div className=" md:mt-2 text-xl md:text-3xl text-black hover:text-gray-400 ">
                Call us
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setOpenMailModal(true);
            }}
            className=" md:my-10 md:mr-10 md:w-1/3 w-3/3  rounded-lg border-purple-500 hover:border-2  md:bg-white bg-purple-300 h-48 md:h-96"
          >
            <div className="flex flex-col items-center mt-6 md:mt-24 text-purple-800 hover:text-purple-600 trasition duration-100 ">
              <FiMail className="p-4 md:p-0 " size="6rem " />
              <div className=" md:mt-2 text-xl md:text-3xl text-black hover:text-gray-400">
                Mail us
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setOpenWriteModal(true);
            }}
            className=" my-5 md:my-10 md:w-1/3 w-3/3 rounded-lg border-purple-500 hover:border-2 bg-purple-400 md:bg-white h-48 md:h-96"
          >
            <div className="flex flex-col items-center mt-6 md:mt-24 text-purple-800 hover:text-purple-600 trasition duration-100">
              <FaPencilAlt className="p-4 md:p-0" size="6rem " />
              <div className=" md:mt-2 text-xl md:text-3xl text-black hover:text-gray-400 ">
                Write us
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between">
          <div
            onClick={() => {
              setOpenCallModal(true);
            }}
            className=" my-5 md:my-10 md:mr-10 md:w-1/2 w-3/3 rounded-lg border-purple-500 hover:border-2  md:bg-white bg-purple-100  h-48 md:h-96 "
          >
            <div className="flex flex-col items-center  mt-6 md:mt-24 text-purple-800 hover:text-purple-600 trasition duration-100">
              <FiPhoneCall className="p-4 md:p-0" size="6rem " />
              <div className=" md:mt-2 text-xl md:text-3xl text-black hover:text-gray-400 ">
                Call us
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setOpenMailModal(true);
            }}
            className=" md:my-10  md:w-1/2 w-3/3  rounded-lg border-purple-500 hover:border-2  md:bg-white bg-purple-300 h-48 md:h-96"
          >
            <div className="flex flex-col items-center mt-6 md:mt-24 text-purple-800 hover:text-purple-600 trasition duration-100 ">
              <FiMail className="p-4 md:p-0 " size="6rem " />
              <div className=" md:mt-2 text-xl md:text-3xl text-black hover:text-gray-400">
                Mail us
              </div>
            </div>
          </div>
        </div>
      )}

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
        <div className="container mx-auto rounded-lg border-purple-500 bg-white ">
          <div className="space-y-5 w-full">
            <h4 className="text-center text-3xl">Contact Us</h4>

            <form>
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  className="text-field"
                  placeholder="Firsts Name"
                />
                <input
                  type="text"
                  className="text-field "
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="text-field"
                  placeholder="Email"
                />
                <input type="tel" className="text-field" placeholder="Phone" />
                <textarea
                  cols="10"
                  rows="5"
                  className="text-field"
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
