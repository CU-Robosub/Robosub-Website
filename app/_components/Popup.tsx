"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PopupProps {
    children: ReactNode;
}

export default function Popup({ children }: PopupProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}