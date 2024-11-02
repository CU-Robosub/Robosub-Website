import HeadshotCard from "../_components/headshotCard";

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
                    <div className=" flex flex-wrap flex-column w-4/5 mx-auto justify-evenly">
                        <HeadshotCard image_url="/headshots/William_Hardee_headshot.jpg" name="William Hardee" title="Lead Software Developer"/>
                        <HeadshotCard image_url="/headshots/William_Hardee_headshot.jpg" name="William Mardee" title="Lead Mechanical Developer"/>
                        <HeadshotCard image_url="/headshots/William_Hardee_headshot.jpg" name="William Eardee" title="Lead Electrical Developer"/>
                        <HeadshotCard image_url="/headshots/William_Hardee_headshot.jpg" name="William Bardee" title="Lead Buisness Developer"/>
                        <HeadshotCard image_url="/headshots/William_Hardee_headshot.jpg" name="William Bardee" title="Lead Buisness Developer"/>
                    </div>
                </div>
            </div>
        </div>
    );
}