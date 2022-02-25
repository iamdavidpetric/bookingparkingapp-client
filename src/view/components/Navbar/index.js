import { Fragment, useState } from "react";
import {
  FaHamburger,
  FaWindowClose,
  FaCarSide,
  FaLockOpen,
} from "react-icons/fa";
import { Button, Modal } from "..";

const Navbar = () => {
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
  return (
    <Fragment>
      <div className="flex-row justify-between bg-purple-500 py-3 px-5 text-white hidden md:flex rounded-xl">
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
          <Button onClick={openSignupModal} className="px-3 text-xs mr-2 py-1">
            Sing Up
          </Button>
          <Button onClick={openSignIn} className="px-3 text-xs mr-2 py-1">
            Log In
          </Button>
          <a href="https://www.google.com" className="pr-5 menu-item">
            Order a card
          </a>
        </div>
      </div>

      <div className="flex flex-col bg-purple-500 py-3 px-5 text-white md:hidden">
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
            <a href="https://www.google.com" className="menu-item">
              Sing Up
            </a>
            <a href="https://www.google.com" className="menu-item">
              Log In
            </a>
          </div>
        )}
      </div>

      <Modal visible={showSingUp}>
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

      <Modal visible={showLogIn}>
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
                  Sign Up
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
