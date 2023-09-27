import { useDocumentTitle } from "@presentation/hooks/useDocumentTitle";
import { memo, useCallback } from "react";
import HomeTemplate from "./template";
import { IAuthentication } from "@domain/usecases/auth/IAuthentication";
import { useInjection } from "inversify-react";
import { AuthenticationTypes } from "@main/service";

const HomePage = memo(() => {
  const authentication = useInjection<IAuthentication>(AuthenticationTypes.authentication);
  const [,] = useDocumentTitle();

  const login = useCallback(async () => {
    await authentication.loginWithPopUp();
  }, [authentication]);

  return <HomeTemplate login={login} />;
});

export default HomePage;
