"use client";

import { useState } from "react";
import { WavyBackground } from "../_components/wavy_background";
import StatItem from "../_components/stat_item";
import Image from "next/image";
import { motion } from 'framer-motion';
import SlidingText from "../_components/technology_page/SlidingText";
import Footer from "../_components/footer";

interface SubInfo {
    img: string;
    description: string;
    cost: number;
    hours: number;
    weight: number;
}


const subInfo: Record<string, SubInfo> = {
    chimera: {
        img: "/subs/chimera.png",
        description: "Chimera is a versatile submersible designed for superior controllability and autonomy. Equipped with 8 motors, a gripper rotation mechanism, and integrated lights, it excels in object manipulation and visibility in all conditions. Its modular design simplifies maintenance and component swapping, while the sliding electronics rack enhances accessibility. Chimera also features a Doppler Velocity Logger (DVL) for precise positioning and orientation, supported by software that uses sensor data to enable fully autonomous decision-making.",
        cost: 16500,
        hours: 2700,
        weight: 20,
    },
    lazarus: {
        img: "/subs/lazarus.png",
        description: "Lazarus is a lightweight and nimble submersible designed for advanced task capabilities in both MATE ROV and RoboSub competitions. Outfitted with a Blue Robotics Newton Gripper and a custom camera housing, it is prepared to tackle complex challenges. With a compact frame (52cm x 50cm x 15cm), Lazarus is highly maneuverable and energy-efficient. Additionally, it features thruster guards made from 1/8 acrylic, ensuring safety and durability by meeting IP20 standards for debris protection.",
        cost: 12300,
        hours: 2220,
        weight: 20,
    },
    leviathan: {
        img: "/subs/leviathan.png",
        description: "Leviathan achieves unmatched visual sensing and autonomy in the RoboSub competition with its nine 60 Hz cameras. To ensure rapid visual analysis, the team transitioned much of its vision software from Python to C++ with Nodeleting, significantly boosting processing speed. Powered by an Intel i7 processor and an NVIDIA GTX 1050 Ti, Leviathan delivers the computational strength needed to support its advanced autonomous systems, making it a standout in performance and capability.",
        cost: 12700,
        hours: 1200,
        weight: 15,
    },
};

export default function Technology() {
    const [selectedSub, setSelectedSub] = useState<keyof typeof subInfo>("chimera");

    const stats = [
        { icon: "money", value: subInfo[selectedSub].cost, unit: "dollars", delay: 0.2 },
        { icon: "dumbell", value: subInfo[selectedSub].weight, unit: "kg", delay: 0.3 },
        { icon: "clock", value: subInfo[selectedSub].hours, unit: "hours", delay: 0.4 }
    ];

    return (
        <>
            <div className="relative w-full h-auto min-h-[100vh] flex flex-col md:flex-row">
                {/* Left Section */}
                <div className="w-full md:w-1/2 h-auto bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900">
                    <div className="flex flex-col w-full mx-auto py-20 px-6 md:px-20 items-center justify-around relative gap-6">

                        {/* Button Section */}
                        <div className="shadow-md overflow-hidden text-lg md:text-2xl lg:text-3xl flex md:flex-nowrap rounded-full border-2 justify-around items-center border-black dark:border-white">
                            {["chimera", "lazarus", "leviathan"].map((sub) => (
                                <div
                                    key={sub}
                                    onClick={() => setSelectedSub(sub)}
                                    className="hover:bg-blue-600 duration-100 cursor-pointer w-full md:w-auto flex flex-row items-center justify-center px-4 py-2 md:h-full"
                                >
                                    {sub.charAt(0).toUpperCase() + sub.slice(1)}
                                </div>
                            ))}
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col w-full h-auto gap-6">
                            <div className="shadow-lg bg-blue-600 dark:bg-blue-800 p-4 m-3 mt-6 h-auto md:min-h-[22rem]">
                                <div className="text-2xl md:text-3xl font-bold">Description.</div>
                                <p className="text-base md:text-lg my-3 text-center md:text-left">
                                    {subInfo[selectedSub].description}
                                </p>
                            </div>
                            <div className="shadow-lg h-auto md:h-40 flex flex-col p-4 space-y-4 overflow-hidden">
                                <h1 className="text-lg md:text-xl font-bold">Specification.</h1>
                                <div className="text-lg md:text-xl">
                                    {stats.map((stat) => (
                                        <StatItem
                                            key={`${selectedSub}-${stat.icon}`}
                                            icon={stat.icon}
                                            value={stat.value}
                                            unit={stat.unit}
                                            delay={stat.delay}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center p-6">
                    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl h-[32rem] bg-slate-50 dark:bg-gray-800 shadow-lg rounded-lg relative overflow-hidden flex flex-col justify-center items-center p-4">
                        <Image
                            className="z-10 max-w-full h-auto"
                            src={`${subInfo[selectedSub].img}`}
                            width={450}
                            height={450}
                            alt={`${selectedSub}`}
                        />
                        <div className="absolute top-1 left-1 text-3xl md:text-5xl font-semibold">{selectedSub.toUpperCase()}</div>
                        <div className="absolute w-full h-full top-0 left-0 overflow-hidden flex flex-col justify-center items-center">
                            <WavyBackground />
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}


{/* Submarine Selector 
<div className="shadow-md overflow-hidden text-lg bg-white md:text-3xl relative top-12 md:top-24 w-4/5 md:w-2/5 h-auto flex flex-wrap md:flex-nowrap rounded-full border-2 justify-around items-center mx-auto border-black">
{["chimera", "lazarus", "papa", "leviathan"].map((sub) => (
    <div
        key={sub}
        onClick={() => setSelectedSub(sub)}
        className="bg-white hover:bg-slate-200 duration-100 cursor-pointer w-full md:w-auto flex flex-row items-center justify-center px-4 py-2 md:h-full"
    >
        {sub.charAt(0).toUpperCase() + sub.slice(1)}
    </div>
))}
</div>*/}