import { Provider } from "react-redux";

import { init } from "./db";
import AppNavigator from "./navigation/index";
import { store } from "./store";
export default function App() {
  init()
    .then(() => {
      console.log("Initialized database");
    })
    .catch((error) => {
      console.log("Error at initializing database");
      console.log(error);
    });
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
