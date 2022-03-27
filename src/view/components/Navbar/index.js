import { Fragment, useState } from "react";
import {
  FaHamburger,
  FaWindowClose,
  FaCarSide,
  FaLockOpen,
} from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { Button, Modal } from "..";
import {
  HOME_PATH,
  PRICING_PATH,
  CONTACT_PATH,
  HOWITWORKS_PATH,
  HELP_PATH,
  ORDERACARD_PATH,
  MYACCOUNT_PATH,
} from "../../../logic/routes/paths";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const [showSingUp, setShowSignUp] = useState(false);

  const [showLogIn, setShowLogIn] = useState(false);

  const openSignupModal = () => {
    setShowSignUp(true);
  };

  const closeSignupModal = () => {
    setShowSignUp(false);
  };

  const openSignIn = () => {
    setShowLogIn(true);
  };

  const closeSignIn = () => {
    setShowLogIn(false);
  };

  const currentUser = {
    name: "David Petric",
    email: "david.petric@gmail.com",
    hasOrderdACard: true,
    isLogged: true,
  };

  return (
    <Fragment>
      <div className="flex-row justify-between bg-purple-500 py-3 px-5 text-white hidden md:flex rounded-xl">
        <div className="flex justify-between items-end">
          <h1
            onClick={() => navigate(HOME_PATH)}
            className="flex text-2xl font-bold pr-5 menu-item"
          >
            <FaCarSide className="mr-2 " size="2rem" />
            App name
          </h1>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "menu-item font-bold underline underline-offset-1"
                : "menu-item"
            }
            to={HOWITWORKS_PATH}
          >
            How it works
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "menu-item font-bold underline underline-offset-1"
                : " menu-item"
            }
            to={CONTACT_PATH}
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "menu-item font-bold underline underline-offset-1"
                : " menu-item"
            }
            to={HELP_PATH}
          >
            Help
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "menu-item font-bold underline underline-offset-1"
                : " menu-item"
            }
            to={PRICING_PATH}
          >
            Pricing
          </NavLink>

          <p className=" menu-item">Payment</p>
        </div>
        {currentUser.isLogged ? (
          <div className="flex items-end">
            <Button
              onClick={() => navigate(MYACCOUNT_PATH)}
              className=" py-0 border-0 px-0 mr-4 hover:bg-inherit hover:text-purple-300 "
            >
              <BsFillPersonFill
                className=" py-0 border-0 px-0 mr-4 "
                size="1.5rem"
              />
            </Button>
            {/* afisez si partea de log-in/log-off pt test */}
            <Button
              onClick={openSignupModal}
              className="px-3 text-xs mr-2 py-1"
            >
              Sing Up
            </Button>
            <Button onClick={openSignIn} className="px-3 text-xs mr-2 py-1">
              Log In
            </Button>
            {/* -- */}
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu-item font-bold underline underline-offset-1"
                  : " menu-item"
              }
              to={ORDERACARD_PATH}
            >
              Order a card
            </NavLink>
          </div>
        ) : (
          <div className="flex items-end">
            <Button
              onClick={openSignupModal}
              className="px-3 text-xs mr-2 py-1"
            >
              Sing Up
            </Button>
            <Button onClick={openSignIn} className="px-3 text-xs mr-2 py-1">
              Log In
            </Button>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu-item font-bold underline underline-offset-1"
                  : " menu-item"
              }
              to={ORDERACARD_PATH}
            >
              Order a card
            </NavLink>
          </div>
        )}
      </div>

      <div className="flex flex-col bg-purple-500 py-3 px-5 text-white md:hidden">
        <div className="flex flex-row justify-between items-center">
          <h1
            className="flex text-2xl font-bold pr-5 menu-item"
            onClick={() => navigate(HOME_PATH)}
          >
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
            <p onClick={() => navigate(HOWITWORKS_PATH)} className="menu-item">
              How it works
            </p>

            <p onClick={() => navigate(CONTACT_PATH)} className="menu-item">
              Contact
            </p>
            <p onClick={() => navigate(HELP_PATH)} className="menu-item">
              Help
            </p>
            <p onClick={() => navigate(PRICING_PATH)} className="menu-item">
              Pricing
            </p>
            <p className="menu-item">Payment</p>
            <p onClick={() => navigate(ORDERACARD_PATH)} className="menu-item">
              Order a card
            </p>
            <p onClick={openSignupModal} className="menu-item">
              Sing Up
            </p>
            <p onClick={openSignIn} className="menu-item">
              Log In
            </p>
          </div>
        )}
      </div>

      <Modal setVisible={setShowSignUp} visible={showSingUp}>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="flex flex-col justify-center items-center ">
              <FaCarSide size={"3rem"} className="text-purple-500" />
              <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
                Create a new account
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>

                <div>
                  <label htmlFor="confirmpassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between"></div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <FaLockOpen />
                  </span>
                  Sign Up
                </button>
                <button
                  onClick={closeSignupModal}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-200 hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-2"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      <Modal setVisible={setShowLogIn} visible={showLogIn}>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="flex flex-col justify-center items-center ">
              <FaCarSide size={"3rem"} className="text-purple-500" />
              <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between"></div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <FaLockOpen />
                  </span>
                  Sign In
                </button>
                <button
                  onClick={closeSignIn}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-200 hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-2"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Navbar;
