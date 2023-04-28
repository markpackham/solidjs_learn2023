import { useContext } from "solid-js";
import Card from "../components/Card";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { items } = useContext(CartContext);

  return (
    <div className="max-w-md my-8 mx-auto">
      <Card rounded={true}>
        <h2>Your Shopping Cart</h2>
      </Card>
    </div>
  );
}
