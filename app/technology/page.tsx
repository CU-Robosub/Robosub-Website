"use client";

import { useState } from "react";
import { WavyBackground } from "../_components/wavy_background";
import StatItem from "../_components/stat_item";

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
        <div className="-z-10 bg-blue-50 w-full">
            <WavyBackground backgroundFill="white" className="w-full min-h-screen">
                {/* Submarine Selector */}
                <div className="overflow-hidden text-lg md:text-3xl relative top-12 md:top-24 w-4/5 md:w-2/5 h-auto flex flex-wrap md:flex-nowrap rounded-full border-2 justify-around items-center mx-auto border-black">
                    {["chimera", "lazarus", "papa", "leviathan"].map((sub) => (
                        <div
                            key={sub}
                            onClick={() => setSelectedSub(sub)}
                            className="bg-white hover:bg-slate-200 duration-100 cursor-pointer w-full md:w-auto flex flex-row items-center justify-center px-4 py-2 md:h-full"
                        >
                            {sub.charAt(0).toUpperCase() + sub.slice(1)}
                        </div>
                    ))}
                </div>
    
                {/* Content Section */}
                <div className="flex flex-col md:flex-row w-11/12 md:w-4/5 mx-auto min-h-[70vh] md:h-2/3 align-middle items-center justify-around relative top-[10%] md:top-[20%]">
                    {/* Text Section */}
                    <div className="flex flex-col w-full md:w-1/2 h-auto md:h-full mb-8 md:mb-0 px-4">
                        <span className="text-4xl md:text-6xl font-bold text-center md:text-left">
                            <span className="inline-block border-b-2 border-black">
                                {selectedSub.toUpperCase()}
                            </span>
                        </span>
                        <p className="text-lg md:text-2xl my-6 md:my-10 text-center md:text-left">
                            {subInfo[selectedSub].description}
                        </p>
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
    
                    {/* Image Section */}
                    <img
                        className="w-full md:w-2/5 max-w-sm md:max-w-none mx-auto"
                        src={subInfo[selectedSub].img}
                        alt={`${selectedSub} submarine`}
                    />
                </div>
            </WavyBackground>
        </div>
    );
}