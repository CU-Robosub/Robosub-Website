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
            <WavyBackground backgroundFill="white" className="w-full h-full">
                <div className="overflow-hidden text-3xl relative top-24 w-2/5 h-14 flex rounded-full border-2 justify-around items-center mx-auto border-black">
                    <div
                        onClick={() => setSelectedSub("chimera")}
                        className="bg-white hover:bg-slate-200 duration-100 cursor-pointer w-full h-full flex flex-row items-center justify-center"
                    >
                        Chimera
                    </div>
                    <div
                        onClick={() => setSelectedSub("lazarus")}
                        className="bg-white hover:bg-slate-200 duration-100 cursor-pointer w-full h-full flex flex-row items-center justify-center border-black"
                    >
                        Lazarus
                    </div>
                    <div
                        onClick={() => setSelectedSub("papa")}
                        className="bg-white hover:bg-slate-200 duration-100 cursor-pointer w-full h-full flex flex-row items-center justify-center border-black"
                    >
                        Papa
                    </div>
                    <div
                        onClick={() => setSelectedSub("leviathan")}
                        className="bg-white hover:bg-slate-200 duration-100 cursor-pointer w-full h-full flex flex-row items-center justify-center"
                    >
                        Leviathan
                    </div>
                </div>

                <div className="flex flex-wrap w-4/5 mx-auto h-2/3 align-middle items-center justify-around relative top-[20%]">
                    <div className="flex flex-col w-1/2 h-full">
                        <span className="text-6xl font-bold">
                            <span className="inline-block border-b-2 border-black">
                                {selectedSub.toUpperCase()}
                            </span>
                        </span>
                        <p className="text-2xl my-10">{subInfo[selectedSub].description}</p>
                        <div className="h-40 justify-evenly flex flex-col">
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
                    <img
                        className="w-2/5"
                        src={subInfo[selectedSub].img}
                        alt={`${selectedSub} submarine`}
                    />
                </div>
            </WavyBackground>
        </div>
    );
}