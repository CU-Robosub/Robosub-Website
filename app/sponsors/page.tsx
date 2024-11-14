"use client";

import Footer from "../_components/footer";
import HeadshotCard from "../_components/headshotCard";

import { motion } from "framer-motion";

export default function Teams() {
    return (
        <>
            <div className="min-h-screen w-full bg-gradient-to-b from-blue-500 via-blue-500 to-black flex flex-col justify-center items-center">
                <div className="px-6 md:px-12 flex flex-col md:flex-row h-full w-full flex-wrap">
                    <div className="flex flex-col justify-center w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="my-5 md:my-10 font-bold text-4xl md:text-7xl w-full md:w-4/5 text-center md:text-left">Thank you to our sponsors!</h1>
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
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center md:justify-start mt-6"
                        >
                            <div className="cursor-pointer rounded-full text-white hover:text-blue-500 duration-100 p-4 md:p-5 mr-4 md:mr-10 text-lg md:text-2xl bg-black">Support Us</div>
                            <div className="cursor-pointer rounded-full text-white hover:text-blue-500 duration-100 p-4 md:p-5 text-lg md:text-2xl bg-black">Contact Us</div>
                        </motion.div>
                    </div>
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
                </div>
            </div>
            <Footer />
        </>
    );
}
