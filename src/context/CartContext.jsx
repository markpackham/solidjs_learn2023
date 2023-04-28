import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [items, setItems] = createStore([
    { title: "text product title", quantity: 3, id: 100, price: 10 },
    { title: "text product title 2", quantity: 13, id: 1100, price: 110 },
  ]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
