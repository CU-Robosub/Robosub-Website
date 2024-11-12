"use client";

import Footer from "../_components/footer";
import HeadshotCard from "../_components/headshotCard";

import { motion } from "framer-motion";

export default function Teams() {
    return (
        <>
            <div className="h-full w-full bg-gradient-to-b from-blue-500 via-blue-500 to-black flex-col flex justify-center items-center">
                <div className="px-12 flex h-2/3 w-full">
                    <div className="flex flex-col justify-evenly w-1/2">
                        <h1 className="font-bold text-7xl w-4/5"> Thank you to our sponsors!</h1>
                        <div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-3xl">
                                    The Colorado RoboSub team relies on the generous support of its sponsors
                                    to continue advancing in the development of autonomous underwater vehicle technology.
                                    We invite contributors to join our sponsor group and help support our mission to innovate
                                    and enhance this exciting field.
                                </p>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex">

                                <div className="cursor-pointer rounded-full text-white hover:text-blue-500 duration-100 p-5 mr-10 text-2xl bg-black">Support Us</div>
                                <div className="cursor-pointer rounded-full  text-white hover:text-blue-500 duration-100 p-5 text-2xl bg-black"> Contact Us</div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap w-1/2 items-center">
                        <img src="./Sponsors/CosmoPizza.png" className="w-1/2 my-10"></img>
                        <img src="./Sponsors/CUBoulder.png" className="w-1/2 my-10"></img>
                        <img src="./Sponsors/EngineeringExcellenceFund.png" className="w-1/2 my-10"></img>
                        <img src="./Sponsors/RobosubLogo.png" className="w-1/2 my-10"></img>
                    </div>
                </div>
            </div>
        </>
    );
}
