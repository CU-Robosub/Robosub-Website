import Image from "next/image";
import { motion } from "framer-motion";
import Typerwriter from "./_components/typewriter";
import HomeMenuItem from "./_components/homeMenuItem";
import { AuroraBackground } from "./_components/aurora_background";
import { Metadata } from "next";
import SlidingBackground from "./_components/home_page/SlidingBackground";
import HomeTitle from "./_components/home_page/HomeTitle";
import ImagePopup from "./_components/home_page/ImagePopup";
import Footer from "./_components/footer";



export const metadata: Metadata = {
  title: 'Home',
  description: "Colorado RoboSub is a team built around inclusion, comradery, and cooperation. As a completely student-run organization, Colorado RoboSub uniquely develops students' professional design capabilities while simultaneously creating an environment in which students are free to learn, fail, and try new things",
}

export default function Home() {
    return (
        <>
            <AuroraBackground>
               <div className="relative grid grid-cols-2 grid-rows-1 h-full w-full">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-8 grid grid-rows-4 items-center">
                            <h1 className="text-8xl font-bold text-center row-span-1">
                                <span className="text-yellow-600">Colorado</span> Robosub
                            </h1>
                            <div className="text-center row-span-1 text-5xl">
                                Autonomous Underwater Vehicles
                            </div>
                            <div className="relative row-span-2 w-full h-full flex flex-col justify-center">
                                <div className="bg-slate-100 relative p-2 grid grid-rows-3 rounded-lg h-4/5 w-3/5 mx-auto shadow-lg border-black border-solid">
                                    <div className="cursor-pointer relative bottom-0 hover:bottom-1 duration-150 w-5/6 h-3/4 mx-auto bg-blue-500 m-1 rounded-md text-center flex flex-col justify-center text-3xl shadow-md">About Us</div>
                                    <div className="cursor-pointer relative bottom-0 hover:bottom-1 duration-150 w-5/6 h-3/4 mx-auto bg-blue-500 m-1 rounded-md text-center flex flex-col justify-center text-3xl shadow-md">Join</div>
                                    <div className="cursor-pointer relative bottom-0 hover:bottom-1 duration-150 w-5/6 h-3/4 mx-auto bg-blue-500 m-1 rounded-md text-center flex flex-col justify-center text-3xl shadow-md">Contact</div>
                                </div>

                                <Image src="/svg/down_arrow.svg" width={50} height={50} alt="arrow" className="relative cursor-pointer rounded-full shadow-lg mx-auto mt-6 top-0 hover:top-1 duration-150"/>
                       
                            </div>

                        </div>
                    </div>
                    <div className="relative w-full h-full">
                        <div className="shadow-lg absolute inset-8 bg-slate-100 rounded-lg overflow-hidden">
                        <Image
                            src="/bg-image.jpg"
                            alt="bg_image"
                            fill
                            className="object-cover" // Add this line
                        />
                        </div>
                    </div>
               </div>
               <div className="h-4/5">

               </div>
            </AuroraBackground>
        </>
    );
}
