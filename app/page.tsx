import Image from "next/image";

import Typerwriter from "./_components/typewriter";
import HomeMenuItem from "./_components/homeMenuItem";

export default function Home() {
  return (
    <div className="h-full w-full -z-50">
      <div className="fixed w-3/5 h-full bg-blue-500 -z-20 left-0"></div>
      <div className="fixed w-2/5 h-full -z-20 right-0"></div>

      <div className="relative top-1/4 ml-10">
        <h1 className="text-9xl font-bold">Colorado Robosub</h1>
        <h2 className="text-5xl h-12">
          <Typerwriter stagger={40}>Autonomous Underwater Vehicles</Typerwriter>
        </h2>
        <div className="flex flex-col h-48 justify-between my-20">
          <HomeMenuItem title={"About Us"} text={" - learn more about our team"}/>
          <HomeMenuItem title={"Join"} text = {" - join our team of passionate engineers"}/>
          <HomeMenuItem title={"Contact"} text = {" - contact us for any buisness or personal inquiries"}/>
        </div>
      </div>

    

      <div className="absolute bottom-4 flex w-full h-7 items-center justify-center">
        <img className="h-full mx-4 relative bottom-0 hover:bottom-2 cursor-pointer duration-200" src="/instagram-icon.svg"></img>
        <img className="h-full mx-4 relative bottom-0 hover:bottom-2 cursor-pointer duration-200" src="/linkedIn-icon.svg"></img>
        <img className="h-full mx-4 relative bottom-0 hover:bottom-2 cursor-pointer duration-200" src="/slack-icon.svg"></img>
      </div>

      


    </div>
  );
}
