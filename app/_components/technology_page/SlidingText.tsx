"use client";

import { motion } from "framer-motion";

export default function SlidingText() {
    return (
        <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75 }}
            className="fixed top-0 w-full h-1/2 bg-white text-9xl text-center flex flex-col justify-center">
            TECHNOLOGY
        </motion.div>
    );

}