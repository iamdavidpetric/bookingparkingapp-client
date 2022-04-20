import routes from "../logic/routes";

import { Footer, Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { history } from "../logic/redux/rootReducer";
import { store as generateStore } from "../logic/redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Creators as ApplicationCreators } from "../logic/reducers/application";

const Application = () => {
  const { persistor, store } = generateStore();
  const initApp = () => store.dispatch(ApplicationCreators.persisted());

  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={initApp}
        >
          <div className="flex flex-col justify-between min-h-screen">
            <div>
              <Navbar />
              <Routes>
                {routes.map((om) => (
                  <Route
                    path={om.path}
                    key={om.path}
                    element={<om.element />}
                  />
                ))}
              </Routes>
            </div>
            <Footer />
          </div>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

export default Application;
