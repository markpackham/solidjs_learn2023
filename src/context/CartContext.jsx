import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const CartContext = createContext();

function CartContextProvider(props) {
  const [items, setItems] = createStore([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}
