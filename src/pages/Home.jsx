import { Show, createResource } from "solid-js";
import Card from "../components/Card";
import { A } from "@solidjs/router";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return data;
};

export default function Home() {
  const [products] = createResource(fetchProducts);

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <Card rounded={true} flat={true}>
              <img src={product.img} alt={product.title} />
              <h2 class="my-3 font-bold">{product.title}</h2>
              <A href={`/product/${product.id}`} class="btn">
                More Info
              </A>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
}
