"use client";

import { motion } from 'framer-motion';

export default function TextPopup() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 md:mt-0"
        >
            <p className="text-lg md:text-3xl text-center md:text-left">
                The Colorado RoboSub team relies on the generous support of its sponsors to continue advancing in the development of autonomous underwater vehicle technology. We invite contributors to join our sponsor group and help support our mission to innovate and enhance this exciting field.
            </p>
        </motion.div>
    );
}