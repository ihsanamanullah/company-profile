'use client'
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
        <h1 className="text-3xl mb-4 font-extrabold uppercase">
          Best Collaboration
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Explore our top products below. Discover solutions that can boost your
          fashion!
        </p>

        {/* Product Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Product Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/p1.webp" 
              alt="Product 1"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Sb Dunk X Black Myth Wukong
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                This version of the shoes use the original shoe for Nike dunk
                Low low-top casual shoes, article number FB8895-601. The
                inspiration comes from the black myth of Wokong. Blue, black and
                gold color matching, coupled with gold hook deconstruction
                design, Somersault Cloud and dragon pattern, simple and
                versatile.
              </p>
              <span className="pr-5 font-bold">Rp.339.000</span>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/Image.jpeg" 
              alt="Product 2"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Nike SB Dunk Low x Born X Raised 'One Block At A Time'
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Introducing the Nike SB Dunk Low x Born x Raised 'One Block at a
                Time'—crafted with meticulous detail for a unique and luxurious
                sneaker that infuses classic style with the signature look of
                Los Angeles' streetwear scene.
              </p>
              <span className="pr-5 font-bold">Rp.445.000</span>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/p3.jpeg" 
              alt="Sb dunk low there's skateboard 'ANTHRACITE' "
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Nike SB Dunk Low Pro x There Anthracite and Gorge Green
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Artfully outspoken and fuelled by activism and fun, Jeff
                Cheung's work with Unity and There defines the true spirit of
                skateboarding.Cheung's expressive hand style can be seen
                throughout the design, including co-branding on the tongue and
                heel, outsole and sockliner art.
              </p>
              <span className="pr-5 font-bold">Rp.500.000</span>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>


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
       

        {/* Section 3 - Our Team */}
        <div className="mt-20">
          <h1 className="text-5xl font-extrabold font-mono mb-6 uppercase">
            Meet Our Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/ceo.jpg"
                alt="Team Member 1"
                width={150}
                height={150}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Sugiono</h3>
              <p className="text-gray-600 mb-4">CEO & Founder</p>
              <p className="text-gray-500">
                Sugiono is the visionary behind A2 District, bringing innovation
                and leadership to the team.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/joni.jpeg"
                alt="Team Member 2"
                width={150}
                height={150}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Johnny Sins</h3>
              <p className="text-gray-600 mb-4">Marketing Director</p>
              <p className="text-gray-500">
                Johnny drives the brand's presence and helps connect with our
                community.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/btk.webp"
                alt="Team Member 3"
                width={150}
                height={150}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Michael Lee</h3>
              <p className="text-gray-600 mb-4">Product Manager</p>
              <p className="text-gray-500">
                Michael ensures that our products meet the highest standards and
                exceed customer expectations.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/nga.jpg"
                alt="Team Member 4"
                width={150}
                height={150}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Ronald Davis</h3>
              <p className="text-gray-600 mb-4">Creative Director</p>
              <p className="text-gray-500">
                Ronald leads our design team, ensuring that our products have a
                unique and engaging aesthetic.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
