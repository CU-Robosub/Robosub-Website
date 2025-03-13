import Image from "next/image"
import Link from "next/link"


export default function Footer() {
    return (
        <>
            <div className="">
                <div className="h-20 w-full bg-black flex justify-between align-middle">
                    <Link href="/">
                    <Image className="cursor-pointer mx-5 h-full" src="/robosub-logo-1.png" alt="logo" width={120} height={50}/>
                    </Link>
                    <div className="flex mx-5">
                        <a className="my-auto flex flex-row items-center relative bottom-0 hover:bottom-2 cursor-pointer duration-200 h-full w-full" href="https://www.instagram.com/corobosub/?hl=en" target="_blank">
                            <img className="h-1/3 mx-3" src="/instagram-icon.svg" alt="Instagram" />
                        </a>
                        <a className="my-auto flex flex-row items-center relative bottom-0 hover:bottom-2 cursor-pointer duration-200 h-full w-full" href="https://www.linkedin.com/company/co-robosub/" target="_blank">
                            <img className="h-1/3 mx-3" src="/linkedIn-icon.svg" alt="LinkedIn" />
                        </a>
                        <a className="my-auto flex flex-row items-center relative bottom-0 hover:bottom-2 cursor-pointer duration-200 h-full w-full" href="https://www.facebook.com/CORoboSub/" target="_blank">
                            <img className="h-1/3 mx-3" src="/slack-icon.svg" alt="Slack" />
                        </a>
                    </div>
                </div>
            </div>
            
        </>
    )
}