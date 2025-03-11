"use client";

import { motion } from 'framer-motion';

export default function SlidingBackground() {
    return (
        <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full md:w-3/5 h-full bg-blue-500 dark:bg-blue-950 left-0"
        ></motion.div>
    );
}