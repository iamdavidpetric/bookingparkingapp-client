import { Button } from "../../components";

const Pricing = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-20 h-96 space-y-3 sm:space-y-0 ">
      {["1", "2", "3"].map((item) => (
        <div
          key={item}
          className="flex flex-col justify-between w-full sm:w-1/3 rounded-md bg-white border-2 border-purple-200 hover:border-purple-700 trasition duration-150 p-3 hover:mx-10"
        >
          <h2 className=" flex justify-center text-xl font-semibold ">
            Abonament pe sa
          </h2>
          <h3 className=" flex justify-center text-xl font-extrabold">
            200$/luna
          </h3>
          <div className="">
            <p>Parcari disponibile:</p>
            <p>P-ta Mihai Viteazu</p>
            <p className="line-through">Avram Iancu </p>
            <p className="line-through">Republicii</p>
          </div>
          <Button>Check-out</Button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
