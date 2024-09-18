import Image from "next/image";

export default function Nav() {
    return (
        <div className="w-11/12 h-12 bg-white shadow-xl border border-black
         rounded-xl z-10 fixed left-1/2 -translate-x-1/2 top-5 flex justify-between">
            <div className="flex w-72 mx-4 justify-between h-full items-center ">
                <a className="h-full w-1/4" href="/"><img src="/robosub-logo-1.png"/></a>
                <div className="hover:text-blue-500 cursor-pointer duration-200"><a href="about">About</a></div>
                <div className="hover:text-blue-500 cursor-pointer duration-200"><a href="/teams">Team</a></div>
                <div className="hover:text-blue-500 cursor-pointer duration-200"><a href="/technology">Technology</a></div>
            </div>
            <div className="flex items-center justify-between mx-4 w-32">
                <a className="h-3/5 hover:scale-110 duration-200" href="https://www.instagram.com/corobosub/" target="_blank"><img className="h-full" src="/instagram-icon.svg"/></a>
                <a className="h-3/5 hover:scale-110 duration-200" href="https://www.linkedin.com/company/co-robosub/mycompany/" target="_blank"><img className="h-full" src="/linkedIn-icon.svg"/></a>
                <a className="h-3/5 hover:scale-110 duration-200"><img className="h-full" src="/slack-icon.svg"/></a>
            </div>
        </div>
    );
}

