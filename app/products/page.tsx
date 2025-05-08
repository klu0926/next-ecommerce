import ProductList from "../ProductList";
import { products } from "../product-data";


export default function ProductPage(){
  return (
  <div className="container mx-auto mt-2 p-8">
      <h1 className="text-4xl font-bold mb-4">Products</h1>
    <ProductList products={products}/>
  </div>

  )
} 