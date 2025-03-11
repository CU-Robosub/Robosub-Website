import Image from "next/image";
import SubteamCards from "../_components/subteamCards";
import Footer from "../_components/footer";
import { BackgroundBeams } from "../_components/background_beams";
import Spin_label from "../_components/spin_label";
import SpinLabel from "../_components/spin_label";
import { Metadata } from 'next'
import Popup from "../_components/Popup";

export const metadata: Metadata = {
    title: 'About Our Team',
    description: 'Learn more about our team and our mission at Colorado Robosub',
}



export default function About() {
    return (
        <>
            <div className="-z-40 py-5 fixed top-0 sm:h-1/2 md:h-full w-full mx-auto flex flex-col items-center justify-center px-4 md:px-8 antialiased">
                <h1 className="font-bold text-5xl sm:text-7xl md:text-[8rem] lg:text-[12rem] mb-8 md:mb-12 text-center z-10">
                    About Us
                </h1>
                <div className="flex flex-col gap-6 sm:flex-row justify-evenly items-start md:items-center w-full max-w-5xl flex-wrap">
                    <SpinLabel title="Founded" label="2020" />
                    <SpinLabel title="Members" label="20+" />
                    <SpinLabel title="AUVs" label="4" />
                </div>
                <BackgroundBeams className="bg-white dark:bg-gray-900" />
            </div>

            <div className="md:top-[30rem] top-[19rem] w-full text-black relative overflow-hidden">
                <div className="relative top-0">
                    <Image src="/svg/wave1.svg" width={50} height={50} className="scale-y-75 w-full block overflow-auto translate-y-[14%]" alt="wave_image"></Image>
                    <Image src="/svg/wave2.svg" width={50} height={50} className="-z-10 absolute scale-y-75 w-full block overflow-auto -translate-y-[86%]" alt="wave_image"></Image>
                    <Image src="/svg/wave3.svg" width={50} height={50} className="-z-20 absolute scale-y-75 w-full block overflow-auto -translate-y-[86%]" alt="wave_image"></Image>
                </div>
                <div className="pt-10 border-b-black border-b-2 flex flex-col items-center bg-gradient-to-b from-blue-500 via-blue-700 to-blue-900 w-full">


                    <div className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-9xl mb-6 md:mb-10 z-10 text-center md:text-left">
                        Our Mission.
                    </div>
                    <div className="relative flex flex-col md:flex-row w-full justify-center items-center gap-6 md:gap-10">
                        <div className="w-full md:w-auto p-4 md:p-5">
                            <Image
                                src="/subteamImgs/buisnessImg.jpg"
                                width={400}
                                height={400}
                                alt="team_image"
                                className="rounded-xl shadow-lg object-cover w-full mx-auto max-w-[400px] h-auto"
                            />
                        </div>

                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl text-center md:text-left z-10 w-full md:w-1/2 px-4 md:px-0">
                            <Popup>
                                Colorado RoboSub's mission is to design, build, and program autonomous underwater vehicles (AUVs) to compete in
                                international competitions. Through this, they aim to develop innovative underwater robotics solutions while fostering
                                hands-on learning and collaboration among students passionate about robotics, engineering, and software development.
                                The team’s broader goal is to advance underwater autonomy and engage in educational outreach, inspiring the next
                                generation of engineers and scientists.
                            </Popup>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full md:w-4/5 items-center py-10 md:py-20 justify-center md:justify-evenly gap-8 md:gap-12 px-4 md:px-0">

                        <div className="flex flex-col w-full md:w-1/2 gap-6 md:gap-10">

                            <div className="font-bold text-3xl mx-auto md:mx-0 sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-10 z-10">
                                <Popup>
                                    Our <span className="text-yellow-600">Newest</span> <br />Sub: Chimera
                                </Popup>
                            </div>

                            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                                <Popup>
                                    Our newest AUV has 8 motors to allow for thrust vectoring and superior mobility. The modular design makes it easy to swap components in and out. Multidimensional gripper to allow for complex manipulation of objects.
                                </Popup>
                            </div>
                        </div>


                        <div className="bg-grid-black w-full md:w-1/3 flex justify-center items-center">
                            <Image
                                src="/subs/chimera.png"
                                alt="chimera_photo"
                                width={500}
                                height={500}
                                className="w-full max-w-[400px] md:max-w-[500px] h-auto"
                            />
                        </div>
                    </div>

                    <div className="bg-[url('/svg/topography.svg')] bg-cover bg-center flex flex-col justify-center w-full border-y-2 border-black py-5">
                        <div className="py-6 font-bold text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center">
                            Subteams
                        </div>
                        
                        <div className="mx-auto grid grid-rows-2 grid-cols-2 min-h-[400px] sm:min-h-[500px] md:min-h-[50vw] w-full sm:w-4/5 md:w-[50vw] lg:w-3/5 gap-4 p-4">
                            <SubteamCards title="Software" svg="/svg/computer.svg" description="Develops code for the AUV's" />
                            <SubteamCards title="Business" svg="/svg/money.svg" description="Organizes events and secures funding" />
                            <SubteamCards title="Electrical" svg="/svg/electrical.svg" description="Manages electronics onboard AUV" />
                            <SubteamCards title="Mechanical" svg="/svg/wrench.svg" description="Builds the AUV's and other projects" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-evenly items-center py-20 px-20">
                        <span className="text-4xl pb-10 md:pb-0 sm:text-5xl md:text-7xl lg:text-9xl font-bold md:border-r-2 md:border-black inline">
                            <Popup>The competition.</Popup>
                        </span>

                        <iframe className="pl-6" width="672" height="378" src="https://www.youtube.com/embed/zGQymhIOxDs?si=29B85oOrWjK-1_2r" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>



                <Footer />
            </div>








        </>
    );
}