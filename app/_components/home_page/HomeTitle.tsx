"use client";

import { motion } from 'framer-motion';

export default function HomeTitle() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl sm:text-5xl md:text-9xl font-bold">Colorado Robosub</h1>
        </motion.div>
    );
}