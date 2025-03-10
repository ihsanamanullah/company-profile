'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-black text-white flex justify-center items-center">
        {/* Header content */}
      </header>

      {/* Body content */}
      <main className="h-auto bg-white text-black py-20 px-24 justify-center items-center text-center">
        <h1 className="text-3xl mb-4 font-extrabold uppercase">Best Collaboration</h1>
        <p className="text-lg md:text-xl mb-10">
          Explore our top products below. Discover solutions that can boost your fashion!
        </p>

        {/* Product Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Product Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/p1.webp" alt="Product 1" width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Sb Dunk X Black Myth Wukong</h3>
              <p className="text-gray-600 text-sm mb-4">
                This version of the shoes uses the original shoe for Nike Dunk Low, article number FB8895-601. 
                The inspiration comes from the black myth of Wukong. Blue, black, and gold color matching, 
                coupled with gold hook deconstruction design, Somersault Cloud, and dragon pattern, simple and versatile.
              </p>
              <span className="pr-5 font-bold">Rp.3.390.000</span>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/Image.jpeg" alt="Product 2" width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Nike SB Dunk Low x Born X Raised &apos;One Block At A Time&apos;</h3>
              <p className="text-gray-600 text-sm mb-4">
                Introducing the Nike SB Dunk Low x Born x Raised &apos;One Block at a Time&apos;—crafted with meticulous detail for a unique and luxurious sneaker.
              </p>
              <span className="pr-5 font-bold">Rp.4.545.000</span>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/p3.jpeg" alt="Product 2" width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Nike SB Dunk Low There Skateboards</h3>
              <p className="text-gray-600 text-sm mb-4">
                Introducing the Nike SB Dunk Low There Skateboards—crafted with meticulous detail for a unique and luxurious sneaker.
              </p>
              <span className="pr-5 font-bold">Rp.9.000.000</span>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Shop by Brand Section */}
        <div id="brand" className="mt-20">
          <h1 className="text-5xl font-extrabold font-mono mb-6 uppercase">Shop by Brand</h1>
          <div className="flex justify-center space-x-10">
            {["nike", "adidas", "new-balance", "vans"].map((brand, index) => (
              <div key={index} className="bg-white p-6 hover:bg-gray-300 transition duration-300 cursor-pointer">
                <Image src={`/${brand}-logo.png`} alt={brand} width={60} height={60} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center capitalize">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
