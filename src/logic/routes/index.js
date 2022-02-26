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

const routes = [Home, Pricing];

export default routes;
