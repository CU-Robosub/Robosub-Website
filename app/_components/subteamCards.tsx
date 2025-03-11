import Image from "next/image";
import Popup from "./Popup";
import Link from "next/link";

export default function SubteamCards({ title, description, svg }: { title: string, description: string, svg: string }) {
    return (
        <Popup>
            <div className="relative flex flex-col justify-evenly items-center shadow-md rounded-xl border-2 border-blue-400 dark:border-gray-900 bg-slate-100 dark:bg-gray-800 dark:text-white col-span-1 row-span-1 w-full h-full p-4 sm:p-6">
                <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                    {title}
                </div>

                <div className="shadow-xl w-1/2 sm:w-2/5 h-1/2 sm:h-2/5 rounded-xl flex justify-center items-center">
                    <Image
                        src={svg}
                        width={100}
                        height={100}
                        alt={title}
                        className="w-full h-auto max-w-[80px] sm:max-w-[100px]"
                    />
                </div>

                <div className="font-bold text-sm sm:text-base md:text-lg text-center">
                    {description}
                </div>

                <Link
                    href={`/teams#${title}`}
                    className="bg-blue-500 dark:bg-blue-900 dark:hover:bg-blue-950 cursor-pointer hover:bg-blue-600 duration-150 rounded-lg shadow-md text-lg sm:text-xl md:text-2xl py-2 px-5 sm:py-3 sm:px-7 text-white text-center"
                >
                    Learn more
                </Link>
            </div>
        </Popup>
    );
}