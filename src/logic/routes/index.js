import Pages from "../../view/pages";
import * as Paths from "./paths";

const Home = {
  element: Pages.Home,
  path: Paths.HOME_PATH,
};

const Pricing = {
  element: Pages.Pricing,
  path: Paths.PRICING_PATH,
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

const routes = [Home, Pricing, Contact, HowItWorks, Help];

export default routes;
