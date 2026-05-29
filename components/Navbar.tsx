import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-lime-100 text-black p-4 text-center">
      <div className="container mx-auto flex flex-wrap gap-6 justify-center ">
        <div>
          <Link href="/">
          <svg fill="#000000" width="33px" height="33px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 6l-1.799 1.055L9.3 9.945 7.5 11v10l1.799 1.055 4.947 2.89L16.045 26l1.799-1.055 4.857-2.89L24.5 21V11l-1.799-1.055-4.902-2.89L16 6zm0 4.22l4.902 2.89v5.78L16 21.78l-4.902-2.89v-5.78L16 10.22z"/></svg>
          </Link>
        </div>    
        <div><Link href="/services" className="py-4 hover:text-indigo-500 transition">Services</Link></div>
        <div><Link href="/pricing" className="py-4 hover:text-indigo-500 transition">Pricing</Link></div>
        <div><Link href="/about" className="py-4 hover:text-indigo-500 transition">About</Link></div>
        <div><Link href="/contact" className="py-4 hover:text-indigo-500 transition">Contact</Link></div>
      </div>
    </nav>
  )
}