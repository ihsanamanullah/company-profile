'use client';
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Cart = () => {
    return (
        <div className="fixed bottom-5 right-5 text-5xl text-black bg-white p-4 rounded-full shadow-lg cursor-pointer hover:rotate-8 transition duration-300">
            <PiShoppingCartSimpleFill />
        </div>
    );
}

export default Cart;