import { Show, createResource } from "solid-js";
import Card from "../components/Card";

export default function Home() {
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    return data;
  };

  const [products] = createResource(fetchProducts);

  return (
    <Show where={products()} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <Card rounded={true} flat={true}>
              <img src={product.img} alt={product.title} />
              <h2 class="my-3 font-bold">{product.title}</h2>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
}
