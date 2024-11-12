import Image from "next/image";
import Link from "next/link";
import {NavLink, NavLinkProps} from "./navLink";


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
    const navLinks: NavLinkProps[] = [
        { destination: "/about", text: "About" },
        { destination: "/teams", text: "Team" },
        { destination: "/technology", text: "Technology" },
        {destination: "/sponsors", text: "Sponsors"}
    ];

    const socialLinks: SocialLinkProps[] = [
        { href: "https://www.instagram.com/corobosub/", iconSrc: "/instagram-icon.svg", alt: "Instagram" },
        { href: "https://www.linkedin.com/company/co-robosub/mycompany/", iconSrc: "/linkedIn-icon.svg", alt: "LinkedIn" },
        { href: "#", iconSrc: "/slack-icon.svg", alt: "Slack" },
    ];
    return (
        <nav className="hidden md:flex w-full h-20 z-50 fixed justify-between items-center">
            <div className="ml-4 text-4xl font-bold">
                <NavLink destination="/" text="Colorado Robosub" />
            </div>
            <div className="mr-4 flex w-1/3 text-2xl justify-between">
                {navLinks.map((link, index) => (
                    <NavLink key={index} {...link} />
                ))}
            </div>
        </nav>
    );
    
}

