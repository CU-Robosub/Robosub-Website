import Image  from "next/image";
import SubteamCards from "../_components/subteamCards";

export default function About() {
    return (
        <>

            <div className="w-full h-auto -z-10 sticky top-0">
                <img className="w-full" src="/About-us-image.jpg" alt="team-picture"></img>
                <h1 className="absolute text-center -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 w-full text-[15rem] font-extrabold">About Us</h1>
            </div>

        
            {/*Split this up into its own componenet later*/}
            <div className="h-1/2 w-full bg-blue-500">
                <div className="flex w-full justify-between h-full">
                    <div className="w-1/3 h-4/5 flex flex-col items-center justify-around my-auto">
                        <div className="text-white text-8xl font-bold">Members</div>
                        <div className="text-white text-6xl font-bold">20+</div>
                    </div>
                    <div className="w-1/3 h-4/5 flex flex-col items-center justify-around my-auto">
                        <div className="text-white text-8xl font-bold">Founded</div>
                        <div className="text-white text-6xl font-bold">2020</div>

                    </div>
                    <div className="w-1/3 h-4/5 flex flex-col items-center justify-around my-auto">
                        <div className="text-white text-8xl font-bold">Robots</div>
                        <div className="text-white text-6xl font-bold">5</div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-500 w-full flex p-6">
                <div className="w-1/2">
                    <h1 className="text-6xl font-bold py-3">Our Mission</h1>
                    <p className="text-xl tracking-wide my-auto">
                        Colorado RoboSub is a dedicated team of students at the University of Colorado Boulder who compete annually in 
                        the RoboNation RoboSub competition in San Diego, CA. One of the most complex collegiate robotics competitions in 
                        the world, RoboSub requires students to design an autonomous submarine and compete on an international stage!
                        As a completely student run and administrated club, Colorado RoboSub focuses on developing students abilities 
                        beyond what can be taught in the classroom, building invaluable engineering intuition, and giving students the 
                        opportunity to be a part of community of passionate peers striving towards a common goal!
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <Image
                    src="/sub-photo-front.png"
                    alt="sub_photo"
                    width={700} // Adjust width and height as needed
                    height={600}
                    className="object-cover rounded-lg"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-3/4">
                <h1 className="text-6xl font-bold text-center">Subteams</h1>
                <div className="flex w-full h-3/4">
                    <SubteamCards title={"Software"}>The team that writes all the code for the AUV and other projects</SubteamCards>
                    <SubteamCards title={"Electrical"}>The team that manages all electrical connections and power</SubteamCards>
                    <SubteamCards title={"Mechanical"}>The team that builds and maintains the AUVs alogn with other projects</SubteamCards>
                    <SubteamCards title={"Buisness"}>The team that manages our team's social media and requests grants</SubteamCards>
                </div>
            </div>

            <div className="border-t-2 h-1/4">
                footer
            </div>

        </>
    );
}