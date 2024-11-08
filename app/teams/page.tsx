import Footer from "../_components/footer";
import HeadshotCard from "../_components/headshotCard";
import TeamCard from "../_components/teamCard";

export default function Teams() {
    return (
        <div>
            <div className="w-full h-96 -z-10 sticky top-0 overflow-hidden">
                <img className="w-full -translate-y-1/4" src="/bg-image-3.png" alt="sub-picture"></img>
                <h1 className="absolute text-center -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 w-full text-[15rem] font-extrabold">Subteams</h1>
            </div>
            <div className="w-full bg-blue-500">
                <div>
                    <h1 className="text-center text-9xl font-bold py-9">Team Leads</h1>
                    <div className="flex flex-wrap flex-column w-full lg:w-4/5 mx-auto justify-evenly">
                        <HeadshotCard image_url="/headshots/William_Hardee_headshot.jpg" name="William Hardee" title="Lead Software Developer" />
                        <HeadshotCard image_url="/headshots/Grant_Riddle_Headshot.jpeg" name="Grant Riddle" title="Lead Electrical Engineer" />
                        <HeadshotCard image_url="/headshots/Jake_Tucker_Headshot.JPG" name="Jake Tucker" title="President" />
                        <HeadshotCard image_url="/headshots/Andrew_Heck_Headshot.JPG" name="Andrew Heck" title="Lead Mechanical Engineer" />
                        <HeadshotCard image_url="/headshots/Xavier_OKeefe_Headshot.JPG" name="Xavier O'keefe" title="Lead Systems Engineer" />
                    </div>
                </div>

                <div className="w-full bg-white py-9">
                    <TeamCard title="Software" imgURL="/subteamImgs/softwareImg.jpg">
                    Our Software Team is responsible for taking our subs' sensory input and providing them with the ability to make their own decisions regarding task execution.
                    Although the Software sub team strives for successful completion of complex tasks, we welcome students of all abilities! No matter whether you are an absolute beginner or an experienced developer, we focus on gradually increasing students' responsibilities and skills involved in the creation of our subs' software in order that the Software sub team is accessible to all!
                    </TeamCard>
                    <TeamCard title="Mechanical" imgURL="/subteamImgs/softwareImg.jpg" left={true}>
                    Our Software Team is responsible for taking our subs' sensory input and providing them with the ability to make their own decisions regarding task execution.
                    Although the Software sub team strives for successful completion of complex tasks, we welcome students of all abilities! No matter whether you are an absolute beginner or an experienced developer, we focus on gradually increasing students' responsibilities and skills involved in the creation of our subs' software in order that the Software sub team is accessible to all!
                    </TeamCard>
                    <TeamCard title="Electrical" imgURL="/subteamImgs/electricalImg.png">
                    Our Software Team is responsible for taking our subs' sensory input and providing them with the ability to make their own decisions regarding task execution.
                    Although the Software sub team strives for successful completion of complex tasks, we welcome students of all abilities! No matter whether you are an absolute beginner or an experienced developer, we focus on gradually increasing students' responsibilities and skills involved in the creation of our subs' software in order that the Software sub team is accessible to all!
                    </TeamCard>
                    <TeamCard title="Buisness" imgURL="/subteamImgs/buisnessImg.jpg" left={true}>
                    Our Software Team is responsible for taking our subs' sensory input and providing them with the ability to make their own decisions regarding task execution.
                    Although the Software sub team strives for successful completion of complex tasks, we welcome students of all abilities! No matter whether you are an absolute beginner or an experienced developer, we focus on gradually increasing students' responsibilities and skills involved in the creation of our subs' software in order that the Software sub team is accessible to all!
                    </TeamCard>
                </div>
            </div>
            <Footer/>
        </div>
    );
}