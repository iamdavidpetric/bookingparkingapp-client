import { Fragment, useState } from "react";
import { FaHamburger, FaWindowClose, FaCarSide } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <div className="flex flex-row justify-between bg-purple-500 py-3 px-5 text-white hidden md:flex rounded-xl">
        <div className="flex justify-between items-end">
          <h1 className="flex text-2xl font-bold pr-5 menu-item">
            <FaCarSide className="mr-2 " size="2rem" />
            App name
          </h1>
          <a href="https://www.google.com" className="pr-5 menu-item">
            How it works
          </a>
          <a href="https://www.google.com" className="pr-5 menu-item">
            Contact
          </a>
          <a href="https://www.google.com" className="pr-5 menu-item">
            Help
          </a>
          <a href="https://www.google.com" className="pr-5 menu-item">
            Pricing
          </a>
          <a href="https://www.google.com" className="pr-5 menu-item">
            Payment
          </a>
        </div>
        <div className="flex items-end">
          <a href="https://www.google.com" className="pr-5 menu-item">
            Order a card
          </a>
        </div>
      </div>

      <div className="flex flex-col bg-purple-500 py-3 px-5 text-white flex md:hidden">
        <div className="flex flex-row justify-between items-center">
          <h1 className="flex text-2xl font-bold pr-5 menu-item">
            <FaCarSide className="mr-2 " size="2rem" />
            App name
          </h1>
          {showMenu ? (
            <h1 className="menu-item" onClick={() => setShowMenu(false)}>
              <FaWindowClose size="2.5rem" />
            </h1>
          ) : (
            <h1 className="menu-item" onClick={() => setShowMenu(true)}>
              <FaHamburger size="2.5rem" />
            </h1>
          )}
        </div>

        {showMenu && (
          <div className="flex flex-col items-center">
            <a href="https://www.google.com" className="menu-item">
              How it works
            </a>
            <a href="https://www.google.com" className="menu-item">
              Contact
            </a>
            <a href="https://www.google.com" className="menu-item">
              Help
            </a>
            <a href="https://www.google.com" className="menu-item">
              Pricing
            </a>
            <a href="https://www.google.com" className="menu-item">
              Payment
            </a>
            <a href="https://www.google.com" className="menu-item">
              Order a card
            </a>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
