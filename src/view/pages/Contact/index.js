import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaPencilAlt } from "react-icons/fa";
import { Button, Modal } from "../../components";

import "./style.css";
import { Fragment, useState } from "react";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row ">
        <div className=" my-10 md:my-20 md:mr-10 md:w-1/3 w-3/3 rounded-lg border-purple-500 hover:border-2 bg-white h-96  ">
          <div className="flex flex-col items-center mt-24 text-purple-800 hover:text-purple-600 trasition duration-100">
            <FiPhoneCall size="6rem " />
            <div className=" mt-2 text-3xl text-black hover:text-gray-400 ">
              <Button
                onClick={() => {
                  setOpenModal(true);
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
              Mail us
            </div>
          </div>
        </div>
        <div className=" my-10 md:my-20 md:w-1/3 w-3/3 rounded-lg border-purple-500 hover:border-2  bg-white h-96">
          <div className="flex flex-col items-center mt-24 text-purple-800 hover:text-purple-600 trasition duration-100">
            <FaPencilAlt size="6rem " />
            <div className=" mt-2 text-3xl text-black hover:text-gray-400">
              Write us
            </div>
          </div>
        </div>
      </div>
      <Modal setVisible={setOpenModal} visible={openModal}>
        <div className="flex flex-col items-center mt-24 text-purple-800 hover:text-purple-600 trasition duration-100">
          <FiPhoneCall size="6rem " />
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            saSAsa
          </Button>
          <div className=" mt-2 text-3xl text-black hover:text-gray-400 ">
            Call us
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Contact;
