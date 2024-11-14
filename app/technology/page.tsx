"use client";

import { useState } from "react";
import { WavyBackground } from "../_components/wavy_background";



export default function Technology() {
    const [selectedSub, setSelectedSub] = useState<string>("chimera")



    return (
        <>
        <div className="-z-10 bg-blue-50 w-full">
            <WavyBackground backgroundFill="white" className="w-full h-full">
                <div className="overflow-hidden text-3xl relative top-24 w-2/5 h-14 flex rounded-full border-2 justify-around items-center mx-auto border-black">
                    <div onClick={() => setSelectedSub("chimera")} className="bg-white hover:bg-slate-200 duration-100 cursor-pointer w-full h-full flex flex-row items-center justify-center">Chimera</div>
                    <div onClick={() => setSelectedSub("lazarus")} className="bg-white hover:bg-slate-200 duration-100 cursor-pointer  w-full h-full flex flex-row items-center justify-center border-black">Lazarus</div>
                    <div onClick={() => setSelectedSub("papa")} className="bg-white hover:bg-slate-200 duration-100 cursor-pointer  w-full h-full flex flex-row items-center justify-center border-black">Papa</div>
                    <div onClick={() => setSelectedSub("leviathan")} className="bg-white hover:bg-slate-200 duration-100 cursor-pointer w-full h-full flex flex-row items-center justify-center">Leviathan</div>
                </div>
                <div className="flex flex-wrap w-4/5 mx-auto  h-2/3 align-middle items-center justify-around relative top-[20%]">
                    <div className="flex flex-col w-1/2 h-full">
                        <span className="text-7xl font-bold mb-10">
                            <span className="inline-block border-b-2 border-black">
                                {selectedSub.toUpperCase()}
                            </span>
                        </span>
                        <p className="text-3xl">{subInfo[selectedSub].description}</p>
                    </div>
                    <img className="w-2/5" src={subInfo[selectedSub].img}></img>
                </div>
            </WavyBackground>
        </div>
      
        </>
    );
}
interface SubInfo {
    img: string;
    description: string;
}

const subInfo: Record<string, SubInfo> = {
    chimera: {
        img: "/subs/chimera.png",
        description: "Our newest sub blah blah very cool and new and it will be very cool and new blah blah",
    },
    lazarus: {
        img: "/subs/lazarus.png",
        description: "Our newest sub blah blah very cool and new and it will be very cool and new blah blah",
    },
    leviathan: {
        img: "/subs/leviathan.png",
        description: "Our newest sub blah blah very cool and new and it will be very cool and new blah blah",
    },
    papa: {
        img: "/subs/papa.png",
        description: "Our newest sub blah blah very cool and new and it will be very cool and new blah blah",
    },
};