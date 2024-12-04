import Image from "next/image";
import Footer from "../_components/footer";
import HeadshotCard from "../_components/headshotCard";
import TeamCard from "../_components/teamCard";
import { TracingBeam } from "../_components/tracing_beam";
import { Metadata } from "next";
export const metadata: Metadata = {

    title: 'Our Team',
    description: "Meet the team of passionate engineers that make Colorado Robosub possible",
}

export default function Teams() {
    return (
        <div>
            
            <div className="w-full bg-blue-500">
                <div className="">
                    <h1 className="text-center text-6xl md:text-9xl font-bold py-9">Team Leads</h1>
                    <div className="flex flex-wrap flex-column w-full lg:w-4/5 mx-auto justify-evenly">
                        <HeadshotCard image_url="/headshots/William_Hardee_headshot.jpg" name="William Hardee" title="Lead Software Developer" />
                        <HeadshotCard image_url="/headshots/Grant_Riddle_Headshot.jpeg" name="Grant Riddle" title="Lead Electrical Engineer" />
                        <HeadshotCard image_url="/headshots/Jake_Tucker_Headshot.JPG" name="Jake Tucker" title="President" />
                        <HeadshotCard image_url="/headshots/Andrew_Heck_Headshot.JPG" name="Andrew Heck" title="Lead Mechanical Engineer" />
                        <HeadshotCard image_url="/headshots/Xavier_OKeefe_Headshot.JPG" name="Xavier O'keefe" title="Lead Systems Engineer" />
                    </div>
                </div>
                <TracingBeam>
                    <div className="w-full bg-white py-9">
                        <TeamCard title="Software" imgURL="/subteamImgs/softwareImg.jpg">
                            Our Software Team is responsible for enabling our subs to interpret sensory input and make autonomous decisions for task execution.
                            While the Software team tackles complex challenges, we welcome students of all experience levels! Whether you’re a beginner or an experienced developer,
                            we focus on gradually increasing responsibilities and building skills. This approach ensures the Software team is accessible to everyone interested in creating our subs' software.
                        </TeamCard>

                        <TeamCard title="Mechanical" imgURL="/subteamImgs/softwareImg.jpg" left={true}>
                            The Mechanical Team at Colorado RoboSub designs, iterates, and integrates all the hardware components for our competition vehicles. This includes
                            everything from frames and hulls to complex systems like torpedo-firing mechanisms, all aimed at providing students with practical engineering experience.
                            While we strive for high-level performance and sophisticated solutions, our team is accessible to students of all abilities and commitment levels.
                            By prioritizing growth and skill development, we ensure there’s a place for anyone eager to contribute and learn on the Colorado RoboSub Mechanical Team.
                        </TeamCard>

                        <TeamCard title="Electrical" imgURL="/subteamImgs/electricalImg.png">
                            The Electrical Team designs and manufactures custom electronics boards for both of our submarines. Throughout the school year, we continually refine
                            past hardware while developing industry skills and emphasizing hands-on learning. Our supportive environment welcomes members of all experience levels,
                            encouraging them to contribute, learn, and build confidence in their technical abilities.
                        </TeamCard>

                        <TeamCard title="Business" imgURL="/subteamImgs/buisnessImg.jpg" left={true}>
                            The Business Team manages administration, public relations, and fundraising, ensuring smooth operations and high visibility for the team. We focus on building
                            professional relationships with faculty, corporate representatives, and peers, using these connections to secure resources and support for our projects.
                            By enhancing communication and networking skills, our team plays a vital role in the success of Colorado RoboSub.
                        </TeamCard>
                    </div>

                </TracingBeam>
            </div>
            <Footer />
        </div>
    );
}