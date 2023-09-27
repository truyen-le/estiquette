import { useAuth0 } from "@auth0/auth0-react";
import { IAuth0Adapter } from "@domain/usecases/auth";
import { AuthenticationTypes } from "@main/service";
import { useInjection } from "inversify-react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const App = () => {
  const auth0Adapter = useInjection<IAuth0Adapter>(
    AuthenticationTypes.auth0Adapter
  );
  const { getAccessTokenSilently, loginWithRedirect, loginWithPopup, logout } =
    useAuth0();

  useEffect(() => {
    auth0Adapter.initialize({
      getAccessTokenSilently,
      loginWithRedirect,
      loginWithPopup,
      logout,
    });
  }, [
    auth0Adapter,
    getAccessTokenSilently,
    loginWithRedirect,
    loginWithPopup,
    logout,
  ]);

  return <Outlet />;
};

export default App;
