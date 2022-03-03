import { FaCar, FaCalendarAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";

const HowItWorks = () => {
  return (
    <div className="py-12 mt-10 rounded-lg bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Book your parking
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to park today!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            text random ca nu stiu ce sa zic aici
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 ">
            <div className="relative">
              <div className="logo-animation">
                <FaCar size="2rem " />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Book in advance
              </p>
              <div className="text-animation">
                Book parking in advance to benefit from a guaranteed space,
                closer to your destination and a saving of about 30% compared to
                ad hoc parking.
              </div>
            </div>

            <div className="relative">
              <div className="logo-animation">
                <FaCalendarAlt size="2rem " />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Monthly Parking
              </p>

              <div className="text-animation">
                Looking for longer term parking? Use JustPark s Monthly Saver
                and save yourself up to 43%. A guaranteed space for as long as
                you need it. Cancel any time - no deposit, no contract.
              </div>
            </div>

            <div className="relative">
              <div className="logo-animation">
                <FaRegMoneyBillAlt size="2rem " />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Rent out your driveway
              </p>

              <div className="text-animation">
                Rent out your unused driveway, parking space or garage for an
                extra income: The first £1,000 you earn is tax free. Add your
                listing, decide when the space is available to drivers, then
                just lean back and watch your earnings roll in.
              </div>
            </div>

            <div className="relative">
              <div className="logo-animation">
                <BsLightningCharge size="2rem " />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Rent out your EV charger
              </p>

              <div className="text-animation">
                Add your electric vehicle charger to JustPark, and help EV
                drivers find charging. It could make you a pretty penny too.
                Help us grow the UKs electric vehicle charging network, and add
                your charger today.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
