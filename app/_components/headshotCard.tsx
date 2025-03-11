import Image from "next/image";


export default function HeadshotCard({name, image_url, title}: {name: string, image_url:string, title:string}) {
    return (
        <div className="min-w-96 my-5 h-auto flex flex-col items-center">
            <div className="p-2">
                <div className="flex relative w-60 h-60 rounded-full overflow-hidden border-4 border-white dark:border-blue-950 shadow-2xl">
                    <Image
                        src={image_url}
                        alt={`${name}'s headshot`}
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
            <div className=" text-center flex flex-col justify-around">
                <h2 className="text-2xl font-bold">{name}</h2>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

