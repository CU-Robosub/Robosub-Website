"use client";

import { motion } from 'framer-motion';

export default function HomeTitle() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl sm:text-5xl md:text-9xl font-semibold"><span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Colorado</span> Robosub</h1>
        </motion.div>
    );
}