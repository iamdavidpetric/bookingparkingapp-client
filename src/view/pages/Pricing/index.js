import { Button } from "../../components";
import { BsCalendarDay } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-20 h-96 space-y-3 sm:space-y-0 ">
      <div className="flex flex-col justify-between w-full sm:w-1/3 rounded-md bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 hover:border-purple-700 trasition duration-150 p-3 md:hover:scale-110">
        <h2 className=" flex justify-center text-xl font-semibold ">
          Abonament pe sa
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center p-2 rounded-full text-white bg-purple-500 h-14 w-14">
            <BsCalendarDay size="2rem" />
          </div>
        </div>
        <h3 className=" flex justify-center text-xl font-extrabold">
          200$/luna
        </h3>

        <p>Parcari disponibile:</p>
        <p>P-ta Mihai Viteazu</p>
        <p className="line-through">Avram Iancu </p>
        <p className="line-through">Republicii</p>

        <Button className="border-purple-500">Check-out</Button>
      </div>
      <div className="flex flex-col justify-between w-full sm:w-1/3 rounded-md bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 hover:border-purple-700 trasition duration-150 p-3 md:hover:scale-110">
        <h2 className=" flex justify-center text-xl font-semibold ">
          Abonament pe sa
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center p-2 rounded-full text-white bg-purple-500 h-14 w-14">
            <BsCalendarDay size="2rem" />
          </div>
        </div>
        <h3 className=" flex justify-center text-xl font-extrabold">
          200$/luna
        </h3>

        <p>Parcari disponibile:</p>
        <p>P-ta Mihai Viteazu</p>
        <p className="line-through">Avram Iancu </p>
        <p className="line-through">Republicii</p>

        <Button className="border-purple-500">Check-out</Button>
      </div>
      <div className="flex flex-col justify-between w-full sm:w-1/3 rounded-md bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 hover:border-purple-700 trasition duration-150 p-3 md:hover:scale-110">
        <h2 className=" flex justify-center text-xl font-semibold ">
          Abonament pe sa
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center p-2 rounded-full text-white bg-purple-500 h-14 w-14">
            <BsCalendarDay size="2rem" />
          </div>
        </div>
        <h3 className=" flex justify-center text-xl font-extrabold">
          200$/luna
        </h3>
        <div className="">
          <p>Parcari disponibile:</p>
          <p>P-ta Mihai Viteazu</p>
          <p className="line-through">Avram Iancu </p>
          <p className="line-through">Republicii</p>
        </div>
        <Button className="border-purple-500">Check-out</Button>
      </div>
    </div>
  );
};

export default Pricing;
