import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="container mx-auto py-5 flex justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="title-bold text-6xl uppercase leading-none ">
          SHOP.CO
        </Link>
        <nav className="flex gap-6 body-regular items-center pt-3">
          <Link href="/shop">Shop</Link>
          <Link href="/shop">On Sale</Link>
          <Link href="/shop">New Arrivals</Link>
          <Link href="/shop">Brands</Link>
        </nav>
        
        
      </div>
      <div><p className="body-regular text-orange-300">Search</p></div>
      <div><p className="body-regular text-orange-300">Bag</p>
      <p className="body-regular text-orange-300">Account</p></div>
    </header>
  )
}

export default Header