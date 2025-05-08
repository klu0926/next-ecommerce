'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname()

  return (
    <nav className="bg-gray-700 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ul className="flex space-x-6">
          <li>
            <Link href="/products" className={`hover:underline ${pathname=== '/products' ? 'text-orange-500 font-bold' : 'text-gray-50'}`}>Products</Link>
          </li>
          <li>
            <Link href="/cart" className={`hover:underline ${pathname=== '/cart' ? 'text-orange-500 font-bold' : 'text-gray-50'}`}>Cart</Link>
          </li>
          <li>
            <Link href="/checkout" className={`hover:underline ${pathname=== '/checkout' ? 'text-orange-500 font-bold' : 'text-gray-50'}`}>Check Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}