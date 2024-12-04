"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { NavLink, NavLinkProps } from "./navLink";
import { useState } from "react";
import { CallTracker } from "assert";

interface SocialLinkProps {
    href: string;
    iconSrc: string;
    alt: string;
}

function SocialLink({ href, iconSrc, alt }: SocialLinkProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="h-3/5 hover:scale-110 duration-200">
            <Image src={iconSrc} alt={alt} height={24} width={24} />
        </a>
    );
}

export default function Nav() {
    const [menu, setMenu] = useState<boolean>(false);

    const navLinks: NavLinkProps[] = [
        { destination: "/about", text: "About" },
        { destination: "/teams", text: "Team" },
        { destination: "/technology", text: "Technology" },
        { destination: "/sponsors", text: "Sponsors" },
    ];

    const socialLinks: SocialLinkProps[] = [
        { href: "https://www.instagram.com/corobosub/", iconSrc: "/instagram-icon.svg", alt: "Instagram" },
        { href: "https://www.linkedin.com/company/co-robosub/mycompany/", iconSrc: "/linkedIn-icon.svg", alt: "LinkedIn" },
        { href: "#", iconSrc: "/slack-icon.svg", alt: "Slack" },
    ];

    // Determine the background color based on the current URL
    let backgroundColor = "";
    if (usePathname() === "/about") {
        backgroundColor = ""; // Example background color
    }

    return (
        <>
            <nav className={`hidden md:flex w-full h-14 z-50 fixed justify-between items-center ${backgroundColor}`}>
                <div className="ml-4 text-4xl font-bold">
                    <NavLink destination="/" text="Colorado Robosub" />
                </div>
                <div className="mr-4 flex w-1/3 min-w-[400px] text-2xl justify-between">
                    {navLinks.map((link, index) => (
                        <NavLink key={index} {...link} />
                    ))}
                </div>
            </nav>

            <nav className="block md:hidden fixed top-0 left-0 z-50">
                <Image onClick={() => setMenu(!menu)} src="/svg/hamburger.svg" width={40} height={40} alt="Hamburger_icon" className={`${menu ? "rotate-90" : ""} duration-200 bg-white rounded-full shadow-xl fixed top-1 left-1`} />

            </nav>
            {menu &&
                <div onClick={() => setMenu(false)} className="z-40 fixed backdrop-blur-sm duration-200 w-full h-full">
                    <div onClick={() => setMenu(false)} className="text-2xl flex flex-col w-1/2 h-1/2 bg-white mx-auto mt-24 rounded-2xl shadow-2xl">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} {...link} />
                        ))}
                    </div>
                </div>
            }
        </>
    );
}
