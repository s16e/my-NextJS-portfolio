export default function Navbar() {
  return (
    <nav className="flex justify-between bg-zinc-200 p-4">
      <h1>Subash Chandra Bose R</h1>
      <ul className="flex space-x-4  ">
        <li>
          <a href="/" className="hover:text-blue-800">
            Home{' '}
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-800">
            {' '}
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="hover:text-blue-800">
            Projects{' '}
          </a>
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
