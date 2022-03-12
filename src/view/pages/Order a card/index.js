import { Button } from "../../components";

const OrderACard = () => {
  return (
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

        <Button className="hover:bg-white w-2/3 md:mb-0 md:ml-5 md:mr-0 md:w-1/2 mt-10 hover:border-purple-500  hover:text-purple-500 trasition duration-150 bg-purple-400 text-white">
          Order a card
        </Button>
      </div>
    </div>
  );
};

export default OrderACard;
