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
        <Card flat={true} rounded={false}>
          <h2>Ninja Tee, Black</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button class="btn">view</button>
        </Card>
        <Card flat={false} rounded={true}>
          <h2>Ninja Tee, White</h2>
          <button class="btn">view</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis.
          </p>
          <p>Only £10</p>
        </Card>
      </div>
    </Show>
  );
}
