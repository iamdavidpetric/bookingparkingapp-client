import { Button } from "../../components";
import { Modal } from "../../components";
import { Fragment, useState } from "react";

const OrderACard = () => {
  const [openOrderACard, setOpenOrderACard] = useState(false);

  return (
    <Fragment>
      <div className="flex flex-col items-center md:flex-row">
        <img
          src="https://i.imgur.com/rSXrhph.png"
          alt="2 cards side by side"
          className="mt-4 w-2/3 md:h-full md:w-1/2 md:mt-12 object-center object-cover rounded-lg"
        />
        <div className="flex flex-col items-center md:w-1/2">
          <div className=" text-2xl mt-7 md:text-3xl md:ml-3">
            Order your card now
          </div>
          <div className="flex flex-col text-lg mt-10 ml-2 mr-2 md:mr-0 md:mt-10 md:ml-5 text-gray-600">
            Our premise is simple: we connect drivers with parking spaces. Our
            award-winning platform makes searching, booking paying for parking
            stress-free. Whether you re looking for a parking space or have a
            driveway you d like to rent out - we re here to help.
          </div>

          <Button
            onClick={() => setOpenOrderACard(true)}
            className="hover:bg-white w-2/3 md:mb-0 md:ml-5 md:mr-0 md:w-1/2 mt-10 hover:border-purple-500  hover:text-purple-500 trasition duration-150 bg-purple-500 text-white"
          >
            Order a card
          </Button>
        </div>
      </div>

      <Modal setVisible={setOpenOrderACard} visible={openOrderACard}>
        <form>
          <div className="flex flex-col space-y-2 ">
            <input
              type="text"
              className="text-field "
              placeholder="First Name"
            />
            <input
              type="text"
              className="text-field  "
              placeholder="Last Name"
            />
            <input type="email" className="text-field " placeholder="Email" />
            <input type="tel" className="text-field " placeholder="Phone" />
            <select className="text-field " name="state" id="state-select">
              <option value=""> State</option>
              <option value="cluj">Cluj</option>
              <option value="brasovState">Brasov</option>
              <option value="timis">Timis</option>
            </select>
            <select
              className="text-field dropdown-menu "
              name="city"
              id="city-select"
            >
              <option value=""> City</option>
              <option value="cluj-napoca">Cluj-Napoca</option>
              <option value="brasovCity">Brasov</option>
              <option value="timisoara">Timisoara</option>
            </select>
            <input type="text" className="text-field " placeholder="Address" />
          </div>
          <div className="flex flex-row mt-4 justify-center">
            <Button className="hover:border-purple-500  hover:text-purple-500 trasition duration-150 bg-purple-500 text-white hover:bg-white w-2/3">
              Order a card
            </Button>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default OrderACard;
