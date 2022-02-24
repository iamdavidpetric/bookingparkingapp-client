import { Footer, Navbar } from "./components";
import { Home } from "./pages";

const Application = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Application;
