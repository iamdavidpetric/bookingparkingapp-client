import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-100 rounded-md h-24 ">
      <p className=" text-gray-400 text-sm align ">&copy;App name 2022</p>
      <div className="flex flex-row space-x-4 pt-2">
        <FiFacebook size="1.5rem" />
        <FiTwitter size="1.5rem" />
        <FiInstagram size="1.5rem" />
      </div>
    </div>
  );
};

export default Footer;
