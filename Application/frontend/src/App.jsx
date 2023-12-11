//components
import { Container } from "@mui/material";
import FetchMeal from "./components/Fetch/FetchMeal";
import FetchEvent from "./components/Fetch/FetchEvent";
import Sidebar from "./components/Sidebar/Sidebar_2";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";

function App() {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (initialized) {
      keycloak.updateToken(80); // You can adjust the time (in seconds) based on your requirements
    }
  }, [keycloak, initialized]);

  return (
    initialized && (
      <div className="App">
        <Sidebar>
          <div className="pages">
            <Container>
              <FetchMeal></FetchMeal>
              <FetchEvent></FetchEvent>
            </Container>
          </div>
        </Sidebar>
      </div>
    )
  );
}

export default App;
