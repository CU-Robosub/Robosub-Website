

export default function Footer() {
    return (
        <>
            <div className="fixed bottom-0 w-full -z-10">
                <div className="h-20 w-full bg-blue-500 flex justify-center align-middle">
                    <img className="h-1/2 mx-4 my-auto relative bottom-0 hover:bottom-2 cursor-pointer duration-200" src="/instagram-icon.svg" alt="Instagram" />
                    <img className="h-1/2 mx-4 my-auto relative bottom-0 hover:bottom-2 cursor-pointer duration-200" src="/linkedIn-icon.svg" alt="LinkedIn" />
                    <img className="h-1/2 mx-4 my-auto relative bottom-0 hover:bottom-2 cursor-pointer duration-200" src="/slack-icon.svg" alt="Slack" />
                </div>
            </div>
            <div className="h-20 w-full"></div>
            
        </>
    )
}