
//components
import { Container } from "@mui/material";
import FetchMeal from "./components/FetchMeal";

import ClippedDrawer from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      
      <ClippedDrawer>
        <div className="pages">
          <Container>
            <FetchMeal></FetchMeal>
          </Container>
        </div>
      </ClippedDrawer>
      
    </div>
  );
}

export default App;
