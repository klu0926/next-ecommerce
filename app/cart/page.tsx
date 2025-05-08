// next.js default all as "server component"
// 'use client' allow use of react hooks (useState, useEffect...)
// “This component will be rendered on the client (browser), not /on the server.”
// next.js make everything server side on default
// send bare minimum to the browser
// use client when:
// - use react hook
// - use browser feature (localstroage, window, onclick, event...)
'use client'

import { useState } from 'react';
import { products } from '../product-data';
import Link from 'next/link';

export default function CartPage() {
  const [cartIds] = useState(['123', '345']); 

  const cartProducts = cartIds.map(id => products.find(p => p.id === id)!);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <ul className="space-y-4"> {/* List for cart items */}
        {cartProducts.map(product => (
          <li key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
            <Link href={`/products/${product.id}`}>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}