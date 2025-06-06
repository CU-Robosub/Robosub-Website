"use client";

import {motion} from 'framer-motion';

interface StatItemProps {
    icon: string;
    value: number;
    unit: string;
    delay?: number;
}

export default function StatItem({ icon, value, unit, delay = 0.2 }: StatItemProps) {
    return (
        <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            <img className="mr-3 h-6" src={`/svg/${icon}.svg`} alt={icon} />
            <div className="font-mono">{value} {unit}</div>
        </motion.div>
    )
}
