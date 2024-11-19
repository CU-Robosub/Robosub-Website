"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typerwriter from "./_components/typewriter";
import HomeMenuItem from "./_components/homeMenuItem";
import { AuroraBackground } from "./_components/aurora_background";

export default function Home() {
  return (
    <AuroraBackground>
        <div className="h-full w-full">
            {/* Left Side Background */}
            <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed w-full md:w-3/5 h-full bg-blue-500 left-0"
            ></motion.div>

            {/* Right Side Image */}
            <div className="hidden md:flex flex-row justify-center fixed right-0 h-full w-2/5">
                <motion.div
                    className="rotate-6 my-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src="/subs/chimera.png" alt="Chimera" width={500} height={500} />
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative top-10 md:top-1/4 ml-6 md:ml-10 text-center md:text-left">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-9xl font-bold">Colorado Robosub</h1>
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl h-12">
                    <Typerwriter stagger={40}>Autonomous Underwater Vehicles</Typerwriter>
                </h2>

                {/* Menu Items */}
                <div className="flex flex-col space-y-6 sm:space-y-8 my-10 mx-4 sm:mx-auto md:mx-0 md:my-20">
                    <HomeMenuItem
                        title={"About Us"}
                        text={" - learn more about our team"}
                        delay={0}
                        url="/about"
                    />
                    <HomeMenuItem
                        title={"Join"}
                        text={" - join our team of passionate engineers"}
                        delay={0.33}
                        url="/about"
                    />
                    <HomeMenuItem
                        title={"Contact"}
                        text={" - contact us for any business or personal inquiries"}
                        delay={0.66}
                        url="/about"
                    />
                </div>
            </div>

            {/* Social Icons */}
            <div className="absolute bottom-4 flex w-full justify-center items-center space-x-6">
                <img
                    className="h-6 sm:h-8 md:h-10 cursor-pointer hover:translate-y-[-0.25rem] duration-200"
                    src="/instagram-icon.svg"
                    alt="Instagram"
                />
                <img
                    className="h-6 sm:h-8 md:h-10 cursor-pointer hover:translate-y-[-0.25rem] duration-200"
                    src="/linkedIn-icon.svg"
                    alt="LinkedIn"
                />
                <img
                    className="h-6 sm:h-8 md:h-10 cursor-pointer hover:translate-y-[-0.25rem] duration-200"
                    src="/slack-icon.svg"
                    alt="Slack"
                />
            </div>
        </div>
    </AuroraBackground>
);
}
