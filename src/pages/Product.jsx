import { useParams } from "@solidjs/router";
import { Show, createResource, createSignal } from "solid-js";
import { useCartContext } from "../context/CartContext";

const fetchProduct = async (id) => {
  const response = await fetch(`http://localhost:4000/products/${id}`);
  const data = await response.json();
  return data;
};

export default function Product() {
  const params = useParams();

  const [product] = createResource(params.id, fetchProduct);

  const { items, setItems } = useCartContext();

  const [adding, setAdding] = createSignal(false);
  const [removing, setRemoving] = createSignal(false);

  const addProduct = () => {
    // used to say when we send a message of product added to the cart
    setAdding(true);
    setTimeout(() => setAdding(false), 2000);

    //check if product exists
    const exists = items.find((p) => p.id === product().id);

    if (exists) {
      // increase quantity of product
      setItems(
        (p) => p.id === product().id,
        "quantity",
        (q) => q + 1
      );
    }

    if (!exists) {
      // add the new product
      setItems([...items, { ...product(), quantity: 1 }]);
    }
  };

  const removeProduct = () => {
    setRemoving(true);
    setTimeout(() => setRemoving(false), 2000);
  };

  return (
    <div class="my-7">
      <Show when={product()} fallback={<p>Loading product...</p>}>
        <div class="grid grid-cols-5 gap-7">
          <div class="col-span-2">
            <img src={product().img} alt="product image" />
          </div>

          <div class="col-span-3">
            <h2 class="text-3xl font-bold mb-7">{product().title}</h2>
            <p>{product().description}</p>
            <p class="my-7 text-2xl">Only £{product().price}</p>
            {/* prevent user spamming button by temporarily disabling it after product added */}
            <button class="btn" onClick={addProduct} disabled={adding()}>
              Add to Cart
            </button>

            <button
              class="bg-red-600 py-2 px-3 my-2 mx-2 inline-block text-white rounded-md border-2 border-red-600"
              onClick={removeProduct}
              disabled={removing()}
            >
              Remove from Cart
            </button>

            <Show when={adding()}>
              <div className="m-2 p-2 border-amber-500 border-2 rounded-md inline-block">
                {product().title} was added to cart!
              </div>
            </Show>

            <Show when={removing()}>
              <div className="m-2 p-2 border-red-500 border-2 rounded-md inline-block">
                {product().title} was removed from cart!
              </div>
            </Show>
          </div>
        </div>
      </Show>
    </div>
  );
}
