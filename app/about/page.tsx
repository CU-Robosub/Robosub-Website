import Image from "next/image";
import SubteamCards from "../_components/subteamCards";
import Footer from "../_components/footer";
import { BackgroundBeams } from "../_components/background_beams";
import Spin_label from "../_components/spin_label";
import SpinLabel from "../_components/spin_label";

export default function About() {
    return (
        <>
            <div className="min-h-screen w-full text-white bg-neutral-950 relative mx-auto flex flex-col items-center justify-center px-4 md:px-8 antialiased">
                <h1 className="font-bold text-5xl sm:text-7xl md:text-[8rem] lg:text-[12rem] mb-8 md:mb-12 text-center z-10">
                    About Us
                </h1>
                <div className="flex flex-col gap-6 md:flex-row justify-evenly items-start md:items-center w-full max-w-5xl flex-wrap">
                    <SpinLabel title="Founded" label="2020" />
                    <SpinLabel title="Members" label="20+" />
                    <SpinLabel title="AUVs" label="4" />
                </div>
                <BackgroundBeams />
            </div>


            <div className="w-full h-1/6 bg-gradient-to-t from-blue-500  to-black">
            </div>
            <div className=" text-black relative bg-blue-500 px-4 py-8 md:px-8 md:py-16 flex flex-col items-center">
                <div className="font-bold text-5xl sm:text-7xl md:text-9xl text-center mb-6 md:mb-10 z-10">
                    Our Mission.
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl text-center md:text-left z-10">
                    Colorado RoboSub's mission is to design, build, and program autonomous underwater vehicles (AUVs) to compete in
                    international competitions. Through this, they aim to develop innovative underwater robotics solutions while fostering
                    hands-on learning and collaboration among students passionate about robotics, engineering, and software development.
                    The team’s broader goal is to advance underwater autonomy and engage in educational outreach, inspiring the next
                    generation of engineers and scientists.
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 bg-white p-4">
                <img className="rounded-md h-4/5" src="/bg-image-3.png" />
                <img className="rounded-md col-span-2" src="team-image.jpg" />
                <img className="rounded-md row-span-2" src="/sub-photo-front-cropped.png" />
                <img className="rounded-md col-span-2 row-span-2" src="/bg-image.jpg" />


            </div>

            <div className="flex flex-col items-center justify-center w-full h-3/4 bg-[url('/flatirons.jpg')] bg-cover">
                <h1 className="text-6xl font-bold text-center text-white py-6">Subteams</h1>
                <div className="flex w-full h-3/4">
                    <SubteamCards title={"Software"}>The team that writes all the code for the AUV and other projects</SubteamCards>
                    <SubteamCards title={"Electrical"}>The team that manages all electrical connections and power</SubteamCards>
                    <SubteamCards title={"Mechanical"}>The team that builds and maintains the AUVs alogn with other projects</SubteamCards>
                    <SubteamCards title={"Buisness"}>The team that manages our team's social media and requests grants</SubteamCards>
                </div>
            </div>
            <Footer />


        </>
    );
}