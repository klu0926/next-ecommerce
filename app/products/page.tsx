
export const dynamic = 'force-dynamic' // force next.js to render on every single request, no static optimization or cache 

import ProductList from "../ProductList";

export default async function ProductPage(){

  // fetch from my own backend
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {cache: 'no-cache'})
  const products = await response.json()

  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/1/cart`, {cache: 'no-cache'}) // no cache to force it always return current data
  const cartProducts = await response2.json()

  return (
  <div className="container mx-auto mt-2 p-8">
      <h1 className="text-4xl font-bold mb-4">Product</h1>
    <ProductList products={products} initialCartProducts={cartProducts}/>
  </div>

  )
} 