
//components
import FetchMeal from "./components/FetchMeal";
import Navbar from "./components/Navbar";
import NavigationSection from "./components/NavigationSection";
import ClippedDrawer from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      
      <ClippedDrawer>
        <div className="pages">
          <FetchMeal></FetchMeal>
        </div>
      </ClippedDrawer>
      
    </div>
  );
}

export default App;
