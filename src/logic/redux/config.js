import storage from "redux-persist/lib/storage";

export const storeConfig = {
  storage,
  key: "root",
  timeout: null,
  blacklist: [],
};

const config = { storeConfig };

export default config;
