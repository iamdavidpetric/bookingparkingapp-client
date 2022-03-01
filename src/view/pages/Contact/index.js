import { Button } from "../../components";

const Contact = () => {
  return (
    <div className="container mx-auto my-20 w-2/3 border-2 rounded-lg border-purple-500 bg-white ">
      <div className="p-4 space-y-5 shadow-xl">
        <h4 className="text-center text-3xl">Contact Us</h4>

        <form>
          <div className="grid grid-cols-2 gap-5 ">
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 focus:border-2 hover:border-purple-700 "
              placeholder="First Name"
            />
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 focus:border-2 hover:border-purple-700 "
              placeholder="Last Name"
            />
            <input
              type="email"
              className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 focus:border-2 hover:border-purple-700 col-span-2"
              placeholder="Email"
            />
            <input
              type="tel"
              className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 focus:border-2 hover:border-purple-700 col-span-2"
              placeholder="Phone"
            />
            <textarea
              cols="10"
              rows="5"
              className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 focus:border-2 hover:border-purple-700 col-span-2"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <div className="flex flex-row mt-4 justify-center">
            <Button>Send Message </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
