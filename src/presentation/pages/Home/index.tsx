import { useDocumentTitle } from "@presentation/hooks/useDocumentTitle";
import { memo } from "react";
import HomeTemplate from "./template";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = memo(() => {
  const {loginWithPopup} = useAuth0();
  // const authentication = useInjection<IAuthentication>(AuthenticationTypes.authentication);
  const [,] = useDocumentTitle();

  // const login = useCallback(async () => {
  //   await authentication.login();
  // }, [authentication]);

  return <HomeTemplate login={loginWithPopup} />;
});

export default HomePage;
