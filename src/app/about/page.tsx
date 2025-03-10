import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* About Us Header */}
      <section className="text-center mb-16 bg-white pt-8">
        <h1 className="text-black text-5xl font-extrabold font-mono mb-4 uppercase">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
          Learn more about our mission, values, and the amazing team behind our brand.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16 bg-white">
        <h2 className="text-black text-4xl font-semibold text-center mb-6">Our Mission</h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-600">
          Our mission is to provide exceptional products that merge style and function, while delivering unparalleled customer service. We aim to inspire individuals to embrace their unique style and express themselves through fashion and creativity.
        </p>
      </section>

      {/* Values Section */}
      <section className="mb-16 bg-white">
        <h2 className="text-black text-4xl font-semibold text-center mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-white shadow-lg hover:scale-105 hover:border-2 border-black rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Innovation</h3>
            <p className="text-black">We are constantly evolving, seeking out new technologies and creative ideas to drive us forward.</p>
          </div>
          <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 hover:border-2 border-black">
            <h3 className="text-2xl font-bold text-black mb-4">Quality</h3>
            <p className="text-black">We are committed to offering top-quality products that meet the highest standards of craftsmanship.</p>
          </div>
          <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 hover:border-2 border-black">
            <h3 className="text-2xl font-bold text-black mb-4">Sustainability</h3>
            <p className="text-black">We prioritize sustainable practices to minimize our environmental footprint while delivering the best.</p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="mb-16 bg-white">
        <h2 className="text-black text-4xl font-semibold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {[{
            name: "Sugiono",
            role: "CEO & Founder",
            image: "/ceo.jpg",
            description: "Sugiono is the visionary founder, leading A2 District with passion and a relentless drive for innovation."
          }, {
            name: "Johnny Sins",
            role: "Marketing Director",
            image: "/joni.jpeg",
            description: "Johnny drives brand strategy and ensures we connect with customers in meaningful ways."
          }, {
            name: "Michael Lee",
            role: "Product Manager",
            image: "/btk.jpg",
            description: "Michael oversees our product development, ensuring we maintain top-tier quality and design."
          }, {
            name: "Ronald Davis",
            role: "Creative Director",
            image: "/nga.jpg",
            description: "Ronald leads the design team, ensuring all our creations align with our brand vision and aesthetics."
          }].map((member, index) => (
            <div key={index} className="text-center p-6 bg-white shadow-lg rounded-lg">
              <Image src={member.image} alt={member.name} width={150} height={150} className="mx-auto rounded-full mb-4" />
              <h3 className="text-black text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-500">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-black text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-6 text-black">
          Have questions? We&apos;d love to hear from you! Reach out to us for collaborations, inquiries, or feedback.
        </p>
        <a href="mailto:ihsanaja121@gmail.com" className="inline-block bg-black text-white py-3 px-8 rounded-lg text-lg transform transition duration-300 hover:scale-105">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;