import Image from "next/image";
import Link from "next/link";

interface NavLinkProps {
    destination: string;
    text: string;
}

function NavLink({ destination, text }: NavLinkProps) {
    return (
        <Link href={destination} className="hover:text-blue-500 cursor-pointer duration-200">
            {text}
        </Link>
    );
}

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
    ];

    const socialLinks: SocialLinkProps[] = [
        { href: "https://www.instagram.com/corobosub/", iconSrc: "/instagram-icon.svg", alt: "Instagram" },
        { href: "https://www.linkedin.com/company/co-robosub/mycompany/", iconSrc: "/linkedIn-icon.svg", alt: "LinkedIn" },
        { href: "#", iconSrc: "/slack-icon.svg", alt: "Slack" },
    ];

    return (
        <nav className="hidden md:flex w-11/12 h-12 bg-white shadow-xl border border-black z-10 fixed left-1/2 -translate-x-1/2 top-5 justify-between">
            <div className="flex w-72 mx-4 justify-between h-full items-center">
                <Link href="/" className="h-full w-1/4">
                    <Image src="/robosub-logo-1.png" alt="RoboSub Logo" width={72} height={48} />
                </Link>
                {navLinks.map((link, index) => (
                    <NavLink key={index} {...link} />
                ))}
            </div>
            <div className="flex items-center justify-between mx-4 w-32">
                {socialLinks.map((link, index) => (
                    <SocialLink key={index} {...link} />
                ))}
            </div>
        </nav>
    );
}

