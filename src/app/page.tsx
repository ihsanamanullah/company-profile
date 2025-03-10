'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-black text-white flex justify-center items-center p-6">
        <h1 className="text-2xl font-bold">Welcome to Our Store</h1>
      </header>

      {/* Body content */}
      <main className="bg-white text-black py-20 px-6 md:px-24 text-center">
        <h1 className="text-3xl font-extrabold uppercase mb-4">Best Collaboration</h1>
        <p className="text-lg md:text-xl mb-10">
          Explore our top products below. Discover solutions that can boost your fashion!
        </p>

        {/* Product Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: 'SB Dunk X Black Myth Wukong',
              image: '/p1.webp',
              description:
                'This version of the shoes uses the original shoe for Nike Dunk Low, article number FB8895-601.',
              price: 'Rp.3.390.000',
            },
            {
              name: "Nike SB Dunk Low x Born X Raised 'One Block At A Time'",
              image: '/image.jpeg',
              description:
                'Introducing the Nike SB Dunk Low x Born x Raised—crafted with meticulous detail for a luxurious sneaker.',
              price: 'Rp.4.545.000',
            },
            {
              name: 'Nike SB Dunk Low There Skateboards',
              image: '/p3.jpeg',
              description:
                'Introducing the Nike SB Dunk Low There Skateboards—crafted with meticulous detail for a unique sneaker.',
              price: 'Rp.9.000.000',
            },
          ].map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
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
          <div className="flex justify-center space-x-10 flex-wrap">
            {[
              'nike',
              'adidas',
              'new-balance',
              'vans',
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-white p-6 hover:bg-gray-300 transition duration-300 cursor-pointer rounded-lg shadow-md"
              >
                <Image
                  src={`/${brand}-logo.png`}
                  alt={brand}
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center capitalize">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}