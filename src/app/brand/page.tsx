"use client";
import Image from "next/image";

const brands = [
  { name: "Nike", image: "/nike-logo.png" },
  { name: "Adidas", image: "/adidas-logo.png" },
  { name: "New Balance", image: "/nb-logo-fixed.png" },
  { name: "Vans", image: "/vans-logo.png" },
  { name: "Puma", image: "/puma.png" },
  { name: "Reebok", image: "/rbk.png" },
  { name: "Converse", image: "/cnv.png" },
  { name: "Under Armour", image: "/ua.png" },
];

const Brand = () => {
  return (
    <div id="brand" className="mt-10 md:mt-16 bg-white py-12 relative -top-10">
      <h1 className="text-4xl md:text-5xl text-center text-black font-extrabold font-mono mb-10 uppercase">
        Shop by Brand
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-30 px-4 md:px-20">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white text-black hover:border-2 border-black p-6 rounded-lg  transition duration-300 cursor-pointer flex flex-col items-center"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold">{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
