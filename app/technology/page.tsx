import { WavyBackground } from "../_components/wavy_background";

export default function Technology() {
    return (
        <div className="-z-10">
        <WavyBackground backgroundFill="white" className="w-full h-full">
            <div className="overflow-hidden text-3xl relative top-24 w-2/5 h-14 flex rounded-full border-2 justify-around items-center mx-auto border-black">
                <div className="bg-white hover:bg-slate-200 duration-100 cursor-pointer w-full h-full flex flex-row items-center justify-center">Chimera</div>
                <div className="bg-white hover:bg-slate-200 duration-100 cursor-pointer  w-full h-full flex flex-row items-center justify-center border-black">Lazarus</div>
                <div className="bg-white hover:bg-slate-200 duration-100 cursor-pointer  w-full h-full flex flex-row items-center justify-center border-black">Papa</div>
                <div className="bg-white hover:bg-slate-200 duration-100 cursor-pointer w-full h-full flex flex-row items-center justify-center">Leviathan</div>
            </div>
            
        </WavyBackground>
        </div>
    );
}