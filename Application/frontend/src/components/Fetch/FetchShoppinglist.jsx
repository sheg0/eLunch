import { useShoppinglistContext } from "../../hooks/useShoppinglistContext.js";
import { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Routes, Route } from "react-router-dom";
import Sho from "../../pages/Shoppinglist.jsx";

function FetchShoppinglist() {
  const { shoppinglists, dispatch } = useShoppinglistContext();
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      try {
        const fetchShoppinglist = async () => {
          const response = await fetch("/api/shoppinglist/");
          const json = await response.json();

          if (response.ok) {
            dispatch({ type: "SET_SHOPPINGLIST", payload: json });
          } else if (!response.ok) {
            throw new Error(
              `Failed to fetch shoppinglist. Status: ${response.status}`
            );
          }
        };

        fetchShoppinglist();
      } catch (error) {
        console.log("Error:", error);
      }
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/Shoppinglist"
        element={<Sho shoppinglists={shoppinglists} />}
      />
    </Routes>
  );
}

export default FetchShoppinglist;
