
export default function SubteamCards({ title, children }: { title: string, children: string }) {
    return (
        <div className="w-1/4 overflow-hidden flex justify-end flex-col p-5">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p>{children}</p>
            <span className="border-2 border-blue-500 ">Learn More</span>
        </div>
    )
}