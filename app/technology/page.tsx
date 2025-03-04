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
        description: "Our newest sub with 8 motors to allow for thrust vectoring and superior mobility. The modular design makes it easy to swap components in and out. Multidimensional gripper to allow for complex manipulation of objects",
        cost: 16500,
        hours: 2700,
        weight: 20,
    },
    lazarus: {
        img: "/subs/lazarus.png",
        description: "Our newest sub with 8 motors to allow for thrust vectoring and superior mobility. The modular design makes it easy to swap components in and out. Multidimensional gripper to allow for complex manipulation of objects",
        cost: 16500,
        hours: 2700,
        weight: 20,
    },
    leviathan: {
        img: "/subs/leviathan.png",
        description: "Our newest sub with 8 motors to allow for thrust vectoring and superior mobility. The modular design makes it easy to swap components in and out. Multidimensional gripper to allow for complex manipulation of objects",
        cost: 16500,
        hours: 2700,
        weight: 20,
    },
    papa: {
        img: "/subs/papa.png",
        description: "Our newest sub with 8 motors to allow for thrust vectoring and superior mobility. The modular design makes it easy to swap components in and out. Multidimensional gripper to allow for complex manipulation of objects",
        cost: 16500,
        hours: 2700,
        weight: 20,
    },
};

export default function Technology() {
    const [selectedSub, setSelectedSub] = useState<keyof typeof subInfo>("chimera");

    const stats = [
        { icon: "money", value: subInfo[selectedSub].cost, unit: "dollars", delay: 0.2 },
        { icon: "dumbell", value: subInfo[selectedSub].weight, unit: "pounds", delay: 0.3 },
        { icon: "clock", value: subInfo[selectedSub].hours, unit: "hours", delay: 0.4 }
    ];

    return (
        <>
            <div className="relative w-full h-full grid grid-rows-10 grid-cols-10">
                <div className="col-span-5 row-span-10 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900">

                    <div className="flex flex-col w-full mx-auto py-20 px-20 items-center justify-around relative ">
                        <div className="shadow-md overflow-hidden text-lg md:text-3xl   flex flex-wrap md:flex-nowrap rounded-full border-2 justify-around items-center border-black dark:border-white">
                            {["chimera", "lazarus", "papa", "leviathan"].map((sub) => (
                                <div
                                    key={sub}
                                    onClick={() => setSelectedSub(sub)}
                                    className=" hover:bg-blue-600 duration-100 cursor-pointer w-full md:w-auto flex flex-row items-center justify-center px-4 py-2 md:h-full"
                                >
                                    {sub.charAt(0).toUpperCase() + sub.slice(1)}
                                </div>
                            ))}
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col w-full h-auto md:h-full mb-8 md:mb-0">
                            <div className="shadow-lg bg-blue-600 dark:bg-blue-800 p-3 m-3 mt-6 h-[20rem]">
                                <div className="text-3xl font-bold">Description.</div>
                                <p className="text-lg md:text-2xl my-3 text-center md:text-left">
                                    {subInfo[selectedSub].description}
                                </p>
                            </div>
                            <div className="h-auto md:h-40 flex flex-col justify-evenly space-y-4">
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
                <div className="rounded-lg relative col-span-5 bg-slate-50 dark:bg-gray-800 row-span-8 col-start-6 row-start-2 shadow-lg m-10 overflow-hidden flex flex-col justify-center items-center">
                    <Image className="z-10" src={`${subInfo[selectedSub].img}`} width={450} height={450} alt={`${selectedSub}`} />
                    <div className="absolute top-1 left-1 text-5xl font-semibold">{selectedSub.toUpperCase()}</div>
                    <div className="absolute w-full h-full top-0 left-0 overflow-hidden flex flex-col justify-center items-center"><WavyBackground/></div>
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