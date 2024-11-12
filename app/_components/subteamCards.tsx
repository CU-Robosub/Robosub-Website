
export default function SubteamCards({ title, children }: { title: string, children: string }) {
    return (
        <div className="w-1/4 overflow-hidden flex justify-end flex-col p-5 text-white border-x-2">
            <h1 className="text-5xl font-bold mb-auto">{title}</h1>
            <p className="text-2xl">{children}</p>
            <div className="bg-blue-500 font-bold hover:bg-blue-800 hover:text-gray-400 inline rounded-md px-2 py-2 mt-4 text-center duration-100">Learn More</div>
        </div>
    );
}
