//import Shoppinglist from "../components/Shoppinglist/Shoppinglist.jsx";
import { ShoppinglistContextProvider } from "../context/ShoppinglistContext.jsx";
import ShoppingList from "../components/Shoppinglist/Shoppinglist.jsx";
const Sho = ({ shoppinglists }) => {
  return (
    <ShoppinglistContextProvider>
      <ShoppingList ListBackend={shoppinglists}></ShoppingList>
    </ShoppinglistContextProvider>
  );
};

export default Sho;
//   <Shoppinglist shoppinglists={shoppinglists}></Shoppinglist>
