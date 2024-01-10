import Shoppinglist from "../components/Shoppinglist/Shoppinglist.jsx";
import { ShoppinglistContextProvider } from "../context/ShoppinglistContext.jsx";

const Sho = ({ shoppinglists }) => {
  return (
    <ShoppinglistContextProvider>
      <Shoppinglist shoppinglists={shoppinglists}></Shoppinglist>
    </ShoppinglistContextProvider>
  );
};

export default Sho;
