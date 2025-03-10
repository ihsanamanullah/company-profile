import Link from "next/link";
import { TbSearch } from "react-icons/tb";
import { SiNike } from "react-icons/si";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center pt-6 pl-5">
      <Link href="/">
        <h1 className="text-1xl md:text-5xl font-mono mb-4 font-semibold">
          A2 DISTRICT
        </h1>
      </Link>

      <Link href="/product">
        <h1 className="text-white font-bold font-mono text-2xl pl-80 hover:underline">
          Products
        </h1>
      </Link>
      <Link href="/brand">
        <h1 className="text-white font-bold font-mono text-2xl place-self-auto space-x-5 hover:underline">
          Brand
        </h1>
      </Link>
      <nav>
        <ul className="flex items-center space-x-8 text-lg">
          <div>
            <Link href="/about">
              <h1 className="text-white font-bold font-mono text-2xl hover:underline">
                About Us
              </h1>
            </Link>
          </div>
          <li className="hover:text-gray-400 hover:rotate-12 cursor-pointer">
            <TbSearch className="text-4xl" />
          </li>
          {/* Search input field */}
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
