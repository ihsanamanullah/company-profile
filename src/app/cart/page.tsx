'use client';
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {

    const cartItems = [
        {
            id: 1,
            name: "Nike SB Dunk Low",
            price: "Rp.339.000",
            image: "/p1.webp",
            quantity: 1,
        },
        {
            id: 2,
            name: "Adidas Superstar",
            price: "Rp.445.000",
            image: "/p2.webp",
            quantity: 2,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl text-black font-bold mb-6">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-lg">Your cart is empty.</p>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex text-black items-center justify-between border-b pb-4 mb-4">
                            <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="text-black">{item.price}</p>
                                <p className="text-black">Qty: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                    <div className="mt-6 flex justify-between">
                        <Link href="/checkout" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                            Proceed to Checkout
                        </Link>
                        <Link href="/" className="text-blue-600 hover:underline">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;