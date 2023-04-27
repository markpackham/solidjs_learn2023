import { useParams } from "@solidjs/router";

export default function Product() {
  const params = useParams();

  return <div>Product Details - {params.id}</div>;
}
