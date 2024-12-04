"use client"

import { motion } from 'framer-motion';

export default function ButtonPopup() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start mt-6"
        >
            <div className="cursor-pointer rounded-full text-white hover:text-blue-500 duration-100 p-4 md:p-5 mr-4 md:mr-10 text-lg md:text-2xl bg-black">Support Us</div>
            <div className="cursor-pointer rounded-full text-white hover:text-blue-500 duration-100 p-4 md:p-5 text-lg md:text-2xl bg-black">Contact Us</div>
        </motion.div>
    );
}