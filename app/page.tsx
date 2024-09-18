import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-full justify-around items-center">
      <div className="w-1/3">
        <h1 className="text-5xl">Autonomous Underwater Vehicles</h1>
        <p className="text-3xl text-gray-500 my-5">Blah Blah Blah Blah Blah Blah Blah Blah Blah
          Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
        </p>
        <div className="flex w-full h-12 justify-around">
          <div className="w-[47.5%] bottom-0 relative hover:bottom-2 duration-200 cursor-pointer flex flex-col items-center justify-center text-blue-500 border border-blue-500">Learn More</div>
          <div className="w-[47.5%] bottom-0 relative hover:bottom-2 duration-200 cursor-pointer flex flex-col items-center justify-center text-blue-500 text-center border border-blue-500">Join</div>

        </div>
      </div>
      <div className="w-1/3">
        <img className="w-full" src="/robosub-logo-2.png"></img>
      </div>
    </div>
  );
}
