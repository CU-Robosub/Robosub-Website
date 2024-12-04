"use client";

import { motion } from "framer-motion";

export default function SponsorImagePopup() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 flex flex-wrap items-center justify-center"
        >
            <img src="./Sponsors/CosmoPizza.png" className="w-1/2 sm:w-1/3 md:w-1/2 my-5 md:my-10" />
            <img src="./Sponsors/CUBoulder.png" className="w-1/2 sm:w-1/3 md:w-1/2 my-5 md:my-10" />
            <img src="./Sponsors/EngineeringExcellenceFund.png" className="w-1/2 sm:w-1/3 md:w-1/2 my-5 md:my-10" />
            <img src="./Sponsors/RobosubLogo.png" className="w-1/2 sm:w-1/3 md:w-1/2 my-5 md:my-10" />
        </motion.div>
    );
}