
//components
import FetchMeal from "./components/FetchMeal";
import Navbar from "./components/Navbar";
import NavigationSection from "./components/NavigationSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <NavigationSection></NavigationSection>
        <FetchMeal></FetchMeal>
      </div>
    </div>
  );
}

export default App;
