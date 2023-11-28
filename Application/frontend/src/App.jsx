//components
import { Container } from "@mui/material";
import FetchMeal from "./components/FetchMeal";
import FetchEvent from "./components/FetchEvent";
import ClippedDrawer from "./components/Sidebar";

import { useKeycloak } from "@react-keycloak/web";

function App() {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div className="App">
      <ClippedDrawer>
        <div className="pages">
          <Container>
            <FetchEvent></FetchEvent>
            <FetchMeal></FetchMeal>
          </Container>
        </div>
        <button onClick={keycloak.logout}>Logout</button>
      </ClippedDrawer>
    </div>
  );
}

export default App;
