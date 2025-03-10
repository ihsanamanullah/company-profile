"use client";

import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid email address. Please include '@'.");
      setSuccess("");
      return;
    }

    if (!name.trim()) {
      setError("Name cannot be empty.");
      setSuccess("");
      return;
    }

    if (!message.trim()) {
      setError("Message cannot be empty.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Form submitted successfully! We'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-white">
      {/* Contact Us Header */}
      <section className="text-center mb-16 bg-white pt-8">
        <h1 className="text-black text-5xl font-extrabold font-mono mb-4 uppercase">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
          Have questions? We&apos;d love to hear from you! Reach out to us for
          collaborations, inquiries, or feedback.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="mb-16 bg-white text-black px-6 md:px-12 lg:px-24">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg"
        >
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border rounded-lg ${
                error ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              style={{ minHeight: "120px" }}
              placeholder="Write your message here"
            ></textarea>
          </div>

          {/* Display Errors or Success Message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-8 rounded-lg text-lg hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-black text-3xl font-semibold mb-6">Other Ways to Reach Us</h2>
        <p className="text-lg mb-4 text-black">
          Email:{" "}
          <a href="mailto:ihsanaja121@gmail.com" className="text-blue-600 hover:underline">
            ihsanaja121@gmail.com
          </a>
        </p>
        <p className="text-lg mb-4 text-black">Phone: 087785391860</p>
        <p className="text-lg text-black">Address: Tangerang Selatan, Banten</p>
      </section>
    </div>
  );
};

export default ContactUs;
