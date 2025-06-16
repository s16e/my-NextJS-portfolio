import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between shadow border-b border p-4 sticky top-0">
      <div>
        <Link href="/">
        <span className="bg-gradient-to-r from-orange-600 to-red-300 bg-clip-text text-transparent font-bold">Subash Chandra Bose R</span>
        </Link>
      </div>
      <ul className="flex space-x-4  ">
        <li>
          <Link href="/" className="hover:text-blue-800">
            Home{' '}
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-800">
            {' '}
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-800">
            Projects{' '}
          </Link>
        </li>
        <li>
          <a href="url" className="hover:text-blue-800">
            {' '}
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
