import Pages from "../../view/pages";
import * as Paths from "./paths";

const Home = {
  element: Pages.Home,
  path: Paths.HOME_PATH,
};

const Contact = {
  element: Pages.Contact,
  path: Paths.CONTACT_PATH,
};

const HowItWorks = {
  element: Pages.HowItWorks,
  path: Paths.HOWITWORKS_PATH,
};

const Help = {
  element: Pages.Help,
  path: Paths.HELP_PATH,
};

const OrderACard = {
  element: Pages.OrderACard,
  path: Paths.ORDERACARD_PATH,
};

const MyAccount = {
  element: Pages.MyAccount,
  path: Paths.MYACCOUNT_PATH,
};

const Booking = {
  element: Pages.Booking,
  path: Paths.BOOKING_PATH,
};

const routes = [
  Home,
  Contact,
  HowItWorks,
  Help,
  OrderACard,
  MyAccount,
  Booking,
];

export default routes;
