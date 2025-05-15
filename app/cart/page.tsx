// backend render
import ShoppingCartList from "./ShoppingCartList"

export const dynamic = 'force-dynamic' // force next.js to render on every single request, no static optimization or cache 

export default async function CartPage() {
  const response = await fetch(`${process.env.PUBLIC_API_URL}/api/users/1/cart`, {
    cache: 'no-cache' 
  })
  const cartProducts = await response.json()


  return (
    <ShoppingCartList initialCartProducts={cartProducts}></ShoppingCartList>
  )
}