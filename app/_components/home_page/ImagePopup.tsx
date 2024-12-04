"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImagePopup() {
    return (
        <motion.div
            className="rotate-6 my-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Image src="/subs/chimera.png" alt="Chimera" width={500} height={500} />
        </motion.div>
    );
}