import Auth0HistoryProvider from "@main/auth0/Auth0HistoryProvider";
import { serviceContainer } from "@main/service";
import { Provider } from "inversify-react";
import App from "src/App";

export const Root = () => {
  return (
    <Provider container={serviceContainer}>
      <Auth0HistoryProvider>
        <App />
      </Auth0HistoryProvider>
    </Provider>
  );
};

export default Root;
