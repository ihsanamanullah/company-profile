import Link from "next/link";
import Image from "next/image";

const Category = () => {
  {
    /* Section 2 - Categories */
  }
  return (
    <div id="brand" className="mt-20">
      <h1 className="text-5xl font-extrabold font-mono mb-6 uppercase">
        Shop by Brand
      </h1>
      <div className="flex justify-center space-x-45">
        <div className="bg-white p-6 hover:bg-gray-300 transition duration-300 cursor-pointer">
          <Image
            src="/nike-logo.png"
            alt="Nike"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-center">Nike</h3>
        </div>
        <div className="bg-white p-6 hover:bg-gray-300 transition duration-300 cursor-pointer">
          <Image
            src="/adidas-logo.png"
            alt="Adidas"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-center">Adidas</h3>
        </div>
        <div className="bg-white p-6 hover:bg-gray-300 transition duration-300 cursor-pointer">
          <Image
            src="/new-balance.webp"
            alt="New Balance"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-center">New Balance</h3>
        </div>
        <div className="bg-white p-6 hover:bg-gray-300 transition duration-300 cursor-pointer">
          <Image
            src="/vans-logo.png"
            alt="Vans"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-center">Vans</h3>
        </div>
      </div>
    </div>
  );
};
export default Category;
