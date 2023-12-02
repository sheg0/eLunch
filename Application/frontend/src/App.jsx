//components
import { Container } from "@mui/material";
import FetchMeal from "./components/FetchMeal";
import FetchEvent from "./components/FetchEvent";
import ClippedDrawer from "./components/Sidebar";
import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="App">
      <ClippedDrawer>
        <div className="pages">
          <Container>
            <Fetch></Fetch>
          </Container>
        </div>
      </ClippedDrawer>
    </div>
  );
}

export default App;
