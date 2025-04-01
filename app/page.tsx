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
    title: 'Colorado Robosub | Home',
    description: "Colorado RoboSub is a team built around inclusion, comradery, and cooperation. As a completely student-run organization, Colorado RoboSub uniquely develops students' professional design capabilities while simultaneously creating an environment in which students are free to learn, fail, and try new things",
}

export default function Home() {
    return (

        <>
    
                <div className="h-full w-full max-w-[100vw]">
                    {/* Left Side Background */}
                    <SlidingBackground />

                    {/* Right Side Image */}
                    <div className="hidden md:flex flex-row items-center justify-center fixed right-0 h-full w-2/5">
                        <ImagePopup />
                    </div>

                    {/* Main Content */}
                    <div className="relative top-10 md:top-1/4 ml-6 md:ml-10 text-center md:text-left">
                        {/* Title Section */}
                        <HomeTitle />
                        <h2 className="text-2xl sm:text-3xl md:text-5xl h-12">
                            <Typerwriter stagger={40}>Autonomous Underwater Vehicles</Typerwriter>
                        </h2>

                        <div className="md:hidden flex justify-center items-center my-4 w-[90vw] overflow-hidden">
                        <ImagePopup />

                        </div>

                        {/* Menu Items */}
                        <div className="flex w-full items-center md:items-start md:w-auto md:ml-auto flex-col space-y-6 sm:space-y-8 my-10 md:mx-0 md:my-20">
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


                </div>

        </>

    );
}
