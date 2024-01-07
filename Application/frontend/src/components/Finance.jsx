import { useContext } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useFinanceContext } from "../hooks/useFinanceContext";
import { useEffect } from "react";

export default function Finance({ finances }) {
  console.log("finance Component: ", finances);
  const { keycloak, initialized } = useKeycloak();
  const { finance, addFinance, updateBalance } = useFinanceContext();

  function handleButtonClick(newBalance) {
    const username2 = keycloak.tokenParsed.preferred_username;
    console.log("username: ", username2);
    updateBalance(username2, newBalance);
  }

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      const username = keycloak.tokenParsed.preferred_username;
      const firstName = keycloak.tokenParsed.given_name;
      const lastName = keycloak.tokenParsed.family_name;

      const userExists = finance.some(
        (fin) => fin.userInfo.userName === username
      );

      if (!userExists) {
        addFinance(username, firstName, lastName);
        console.log("user Created with the name: ", username);
      }
    }
  }, [initialized, keycloak.authenticated, finances, addFinance]);

  return (
    <div>
      <button onClick={() => handleButtonClick(100)}></button>
    </div>
  );
}
