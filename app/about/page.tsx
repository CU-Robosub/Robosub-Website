import Image from "next/image";
import SubteamCards from "../_components/subteamCards";
import Footer from "../_components/footer";
import { BackgroundBeams } from "../_components/background_beams";
import Spin_label from "../_components/spin_label";
import SpinLabel from "../_components/spin_label";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Our Team',
  description: 'Learn more about our team and our mission at Colorado Robosub',
}



export default function About() {
    return (
        <>
            <div className="-z-40 fixed top-0 min-h-screen w-full h-full b- text-white bg-neutral-950 mx-auto flex flex-col items-center justify-center px-4 md:px-8 antialiased">
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

            <div className="top-[30rem] text-black w-full relative overflow-hidden">
                <div className="relative top-0">
                    <Image src="/svg/wave1.svg" width={50} height={50} className="scale-y-75 w-full block overflow-auto translate-y-[14%]" alt="wave_image"></Image>
                    <Image src="/svg/wave2.svg" width={50} height={50} className="-z-10 absolute scale-y-75 w-full block overflow-auto -translate-y-[86%]" alt="wave_image"></Image>
                    <Image src="/svg/wave3.svg" width={50} height={50} className="-z-20 absolute scale-y-75 w-full block overflow-auto -translate-y-[86%]" alt="wave_image"></Image>
                </div>
                <div className="pt-10 border-b-black border-b-2 flex flex-col items-center bg-gradient-to-b from-blue-500 via-blue-700 to-blue-900 w-full">
                    <div className="flex flex-col items-center border-b-2 border-b-black w-full">
                        <div className="font-bold text-5xl sm:text-7xl md:text-9xl mb-6 md:mb-10 z-10">
                            Our Mission.
                        </div>
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl text-center md:text-left z-10">
                            Colorado RoboSub's mission is to design, build, and program autonomous underwater vehicles (AUVs) to compete in
                            international competitions. Through this, they aim to develop innovative underwater robotics solutions while fostering
                            hands-on learning and collaboration among students passionate about robotics, engineering, and software development.
                            The team’s broader goal is to advance underwater autonomy and engage in educational outreach, inspiring the next
                            generation of engineers and scientists.
                        </div>
                        <div className="flex w-4/5 items-center py-20 justify-evenly">
                            <div className="flex flex-col w-1/2">
                                <div className="font-bold text-xl sm:text-3xl md:text-6xl mb-6 md:mb-10 z-10">Our <span className="text-yellow-600">Newest</span> Submarine</div>
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl ">Our newest sub with 8 motors to allow for thrust vectoring and superior mobility. The modular design makes it easy to swap components in and out. Multidimensional gripper to allow for complex manipulation of objects</div>
                            </div>
                            <div className="bg-grid-black w-1/3 flex items-center align-middle">
                                <Image className="" src="/subs/chimera.png" alt="chimera_photo" width={500} height={500}/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('/svg/topography.svg')] bg-cover bg-center grid grid-cols-3 gap-4 p-4">
                        <img className="rounded-md h-4/5" src="/bg-image-3.png" />
                        <img className="rounded-md col-span-2" src="team-image.jpg" />
                        <img className="rounded-md row-span-2" src="/sub-photo-front-cropped.png" />
                        <img className="rounded-md col-span-2 row-span-2" src="/bg-image.jpg" />


                    </div>
                </div>


                <div className="flex flex-col items-center justify-center w-full h-3/4 bg-[url('/flatirons.jpg')] bg-cover">
                    <h1 className="text-6xl font-bold text-center text-white py-6">Subteams</h1>
                    <div className="flex w-full h-96">
                        <SubteamCards title={"Software"}>The team that writes all the code for the AUV and other projects</SubteamCards>
                        <SubteamCards title={"Electrical"}>The team that manages all electrical connections and power</SubteamCards>
                        <SubteamCards title={"Mechanical"}>The team that builds and maintains the AUVs alogn with other projects</SubteamCards>
                        <SubteamCards title={"Buisness"}>The team that manages our team's social media and requests grants</SubteamCards>
                    </div>
                </div>
                <Footer/>
            </div>
            







        </>
    );
}