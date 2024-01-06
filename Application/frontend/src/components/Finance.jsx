import { useContext } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useFinanceContext } from "../hooks/useFinanceContext";
import { useEffect } from "react";

export default function Finance({ finances }) {
  console.log("finance Component: ", finances);
  const { keycloak, initialized } = useKeycloak();
  const { addFinance } = useFinanceContext();

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      const username = keycloak.tokenParsed.preferred_username;
      const firstName = keycloak.tokenParsed.given_name;
      const lastName = keycloak.tokenParsed.family_name;

      const userExists = finances.some(
        (finance) => finance.userInfo.userName === username
      );

      if (!userExists) {
        addFinance(username, firstName, lastName);
        console.log("user Created with the name: ", username);
      }
    }
  }, [initialized, keycloak.authenticated, finances, addFinance]);

  return <div></div>;
}
