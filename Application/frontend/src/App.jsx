//components
import { Container } from "@mui/material";
import FetchMeal from "./components/FetchMeal";
import FetchEvent from "./components/FetchEvent";
import Sidebar from "./components/Sidebar/Sidebar_2";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <div className="pages">
          <Container>
            <FetchEvent></FetchEvent>
            <FetchMeal></FetchMeal>
          </Container>
        </div>
      </Sidebar>
    </div>
  );
}

export default App;
