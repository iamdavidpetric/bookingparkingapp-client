import { FiFacebook, FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-200 rounded-md h-24 ">
      <p className=" text-gray-400 text-sm align ">&copy;park. 2022</p>
      <div className="flex flex-row space-x-6 pt-2 ">
        <a
          className="border-t-2 px-2 py-1.5 border-purple-500 hover:px-4 duration-200 hover:border-red-500"
          href="https://www.facebook.com/david.petric.35/"
          rel="noreferrer"
          target="_blank"
        >
          <FiFacebook size="1.5rem"></FiFacebook>
        </a>
        <a
          className="border-t-2 px-2 py-1.5  border-purple-500 hover:px-4 duration-200 hover:border-red-500"
          href="https://twitter.com/jtimberlake"
          rel="noreferrer"
          target="_blank"
        >
          <FiTwitter size="1.5rem"></FiTwitter>
        </a>
        <a
          className="border-t-2 px-2 py-1.5  border-purple-500 hover:px-4 duration-200 hover:border-red-500"
          href="https://www.instagram.com/david.petric35/"
          rel="noreferrer"
          target="_blank"
        >
          <FiInstagram size="1.5rem"></FiInstagram>
        </a>
        <a
          className="border-t-2 px-2 py-1.5  border-purple-500 hover:px-4 duration-200 hover:border-red-500"
          href="https://github.com/iamdavidpetric"
          rel="noreferrer"
          target="_blank"
        >
          <FiGithub size="1.5rem"></FiGithub>
        </a>
      </div>
    </div>
  );
};

export default Footer;
