import Link from "next/link";
import Image from "next/image";
import { SiNike, SiAdidas, SiNewbalance } from "react-icons/si";

const products = [
  {
    id: 1,
    name: " Nike Sb Dunk X Black Myth Wukong",
    price: "Rp.3.900.000",
    image: "/p1.webp",
  },
  {
    id: 2,
    name: "Nike SB Dunk Low x Born X Raised 'One Block At A Time'",
    price: "Rp.4.500.000",
    image: "/Image.jpeg",
  },
  {
    id: 3,
    name: "Nike Sb Dunk There Skateboards Anthracite",
    price: "Rp.9.000.000",
    image: "/p3.jpeg",
  },
  { id: 4, name: "Adidas Ultraboost", price: "Rp.2.350.000", image: "/ub.png" },
  { id: 5, name: "Adidas Superstar", price: "Rp.1.500.000", image: "/ss.png" },
  { id: 6, name: "Adidas Stan Smith", price: "Rp.900.000", image: "/sm.png" },
  { id: 7, name: "New Balance 574", price: "Rp.2.500.000", image: "/574.png" },
  { id: 8, name: "New Balance 990", price: "Rp.2.000.000", image: "/990.avif" },
  {
    id: 9,
    name: "New Balance Fresh Foam",
    price: "Rp.3.900.000",
    image: "/ff.png",
  },
];

const Product = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-6xl font-bold font-mono text-center text-black mb-8">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border hover:border-2 border-black rounded-lg shadow-lg p-4 bg-white"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-lg font-bold text-black">{product.name}</h2>
              {product.name.includes("Nike") && (
                <SiNike className="text-2xl text-black" />
              )}
              {product.name.includes("Adidas") && (
                <SiAdidas className="text-2xl text-black" />
              )}
              {product.name.includes("New Balance") && (
                <SiNewbalance className="text-2xl text-black" />
              )}
            </div>
            <p className="text-black mt-2">{product.price}</p>
            <Link href={`/product/${product.id}`} passHref>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-950">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
