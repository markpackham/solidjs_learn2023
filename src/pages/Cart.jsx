import { For } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { items } = useCartContext();

  // find how much is spent in the cart
  const total = () => {
    return items.reduce((accumulator, prod) => {
      return accumulator + prod.quantity * prod.price;
    }, 0);
  };

  return (
    <div className="max-w-md my-8 mx-auto">
      <Card rounded={true}>
        <h2>Your Shopping Cart</h2>
        <For each={items}>
          {(item) => (
            <p className="my-3">
              {item.title} - £{item.price} x {item.quantity}{" "}
            </p>
          )}
        </For>

        <p className="nt-8 pt-4 border-t-2 font-bold">
          Total cart price - £{total()}
        </p>
      </Card>
    </div>
  );
}
