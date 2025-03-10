'use client'; 
import Image from "next/image";

export default function Home() {
  return (
    <div>
      

      {/* Body Content */}
      <main className="h-auto bg-white text-black py-20 px-6 md:px-24 text-center">
        <h1 className="text-3xl mb-4 font-extrabold uppercase">Best Collaboration</h1>
        <p className="text-lg md:text-xl mb-10">
          Explore our top products below. Discover solutions that can boost your fashion!
        </p>

        {/* Product Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "SB Dunk X Black Myth Wukong",
              image: "/p1.webp",
              description:
                "This version of the shoes uses the original shoe for Nike Dunk Low, article number FB8895-601.",
              price: "Rp.3.390.000",
            },
            {
              name: "Nike SB Dunk Low x Born X Raised 'One Block At A Time'",
              image: "/Image.jpeg",
              description:
                "Introducing the Nike SB Dunk Low x Born x Raised—crafted with meticulous detail for a luxurious sneaker.",
              price: "Rp.4.545.000",
            },
            {
              name: "Nike SB Dunk Low There Skateboards",
              image: "/p3.jpeg",
              description:
                "Introducing the Nike SB Dunk Low There Skateboards—crafted with meticulous detail for a unique sneaker.",
              price: "Rp.9.000.000",
            },
          ].map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <span className="pr-5 font-bold">{product.price}</span>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Shop by Brand Section */}
        <div id="brand" className="mt-20">
          <h1 className="text-5xl font-extrabold font-mono mb-6 uppercase">Shop by Brand</h1>

          {/* Grid Layout for Brands */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
            {[
              { name: "Nike", image: "/nike-logo.png" },
              { name: "Adidas", image: "/adidas-logo.png" },
              { name: "New Balance", image: "/pngwing.com.png" }, // Ensure this file exists
              { name: "Vans", image: "/vans-logo.png" },
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:bg-gray-100 hover:border-black transition duration-300 cursor-pointer flex flex-col items-center"
              >
                <Image src={brand.image} alt={brand.name} width={80} height={80} className="mb-4" />
                <h3 className="text-lg font-semibold">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
