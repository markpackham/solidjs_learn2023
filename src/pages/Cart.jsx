import { For } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { items } = useCartContext();

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
      </Card>
    </div>
  );
}
