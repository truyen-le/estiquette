import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode, memo, useEffect } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = memo(({ children }: ProtectedRouteProps) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);
  return <>{children}</>;
});
