import products from "../../Pages/Ambrosia/Products/index";
import AmbrosiaProduct from "./AmbrosiaProduct";

export default function AmbrosiaPage() {
return (
<div className="boxAmbrosia mainContent-boxAmbrosia">
    {products.map(product => (
    <AmbrosiaProduct key={product.id} product={product} />
        ))}
</div>
  );
}