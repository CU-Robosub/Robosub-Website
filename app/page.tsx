import Image from "next/image";
export default function Home() {
  return (
    <div className="h-full w-full">
    <div className="fixed w-1/2 h-full bg-blue-500 -z-20 left-0">
      <div className="fixed w-full h-full bg-[url('/lines.svg')] left-0 bottom-0"></div>
    </div>
    <div className="fixed w-1/2 h-full bg-[url('/bg-image.jpg')] bg-[75%_50%] -z-20 right-0"></div>
    <div className="flex w-full h-full justify-around items-center">
      <div className="w-1/3">
        <h1 className="text-5xl">Autonomous Underwater Vehicles</h1>
        <p className="text-3xl text-white my-5">
          Blah Blah Blah Blah Blah Blah Blah Blah Blah
          Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
        </p>
        <div className="flex w-full h-12 justify-around">
          <div className="w-[47.5%] bottom-0 relative hover:bottom-2 duration-200 cursor-pointer flex flex-col items-center justify-center text-black border border-black">Learn More</div>
          <div className="w-[47.5%] bottom-0 relative hover:bottom-2 duration-200 cursor-pointer flex flex-col items-center justify-center text-black text-center border border-black">Join</div>

        </div>
      </div>
      <div className="w-1/3">
        <img className="w-full scale-125" src="/robosub-logo-1.png"></img>
      </div>
    </div>
    </div>
  );
}
