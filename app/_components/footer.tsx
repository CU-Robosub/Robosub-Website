import Image from "next/image"


export default function Footer() {
    return (
        <>
            <div className="">
                <div className="h-20 w-full bg-black flex justify-between align-middle">
                    <Image className="mx-5 h-full" src="/robosub-logo-1.png" alt="logo" width={120} height={50}/>
                    <div className="flex mx-5">
                        <img className="h-1/3 mx-3 my-auto relative bottom-0 hover:bottom-2 cursor-pointer duration-200" src="/instagram-icon.svg" alt="Instagram" />
                        <img className="h-1/3 mx-3 my-auto relative bottom-0 hover:bottom-2 cursor-pointer duration-200" src="/linkedIn-icon.svg" alt="LinkedIn" />
                        <img className="h-1/3 mx-3 my-auto relative bottom-0 hover:bottom-2 cursor-pointer duration-200" src="/slack-icon.svg" alt="Slack" />
                    </div>
                </div>
            </div>
            
        </>
    )
}