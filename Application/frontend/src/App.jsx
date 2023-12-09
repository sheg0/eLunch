//components
import { Container } from "@mui/material";
import FetchMeal from "./components/FetchMeal";
import FetchEvent from "./components/FetchEvent";
import ClippedDrawer from "./components/Sidebar";
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
    <div className="App">
      <ClippedDrawer>
        <div className="pages">
          <Container>
            <FetchMeal></FetchMeal>
            <FetchEvent></FetchEvent>
          </Container>
        </div>
      </ClippedDrawer>
    </div>
  );
}

export default App;
