// next.js default all as "server component"
// 'use client' allow use of react hooks (useState, useEffect...)
// “This component will be rendered on the client (browser), not /on the server.”
// next.js make everything server side on default
// send bare minimum to the browser
// use client when:
// - use react hook
// - use browser feature (localstroage, window, onclick, event...)
'use client'

export const dynamic = 'force-dynamic' // force next.js to render on every single request, no static optimization or cache 

import { useState } from 'react';
import { Product } from '../product-data';
import Link from 'next/link';


export default  function ShoppingCartList({initialCartProducts}: {initialCartProducts: Product[]}){
  const [cartProducts, setcartProducts] = useState(initialCartProducts); 

  async function removeFromCart(productId: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/1/cart`, {
      method: 'DELETE',
      body: JSON.stringify({
        productId,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const updatedCartProducts = await response.json();
    setcartProducts(updatedCartProducts);
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <ul className="space-y-4"> {/* List for cart items */}
        {cartProducts.map(product => (
          <li key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
            <Link href={`/products/${product.id}`}>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <div className='flex justify-end'>
                <button
                  className="cursor-pointer bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromCart(product.id);
                  }}>Remove
                  </button>
              </div>
          
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}