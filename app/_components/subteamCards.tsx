import Image from "next/image";
import Popup from "./Popup";
import Link from "next/link";


export default function SubteamCards({ title, description, svg }: { title: string, description: string, svg: string }) {
    return (
        <Popup>
            <div className="relative flex flex-col justify-evenly items-center shadow-md rounded-xl border-2 border-blue-400 bg-slate-100 col-span-1 row-span-1 w-full h-full">
                <div className="font-bold text-3xl">{title}</div>
                <div className="shadow-xl w-2/5 h-2/5 rounded-xl flex flex-col justify-center">
                    <Image src={svg} width={100} height={100} alt="computer" className="mx-auto my-auto" />
                </div>
                <div className="font-bold">{description}</div>
                <Link href={`/teams#${title}`} className="bg-blue-500 cursor-pointer relative bottom-0 hover:bottom-1 duration-150 rounded-lg shadow-md text-3xl py-3 px-7">Learn more</Link>
            </div>
        </Popup>
    );
}
