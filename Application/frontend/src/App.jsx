//components
import { Container } from "@mui/material";
import FetchMeal from "./components/FetchMeal";
import FetchEvent from "./components/FetchEvent";
import ClippedDrawer from "./components/Sidebar";

function App() {
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
