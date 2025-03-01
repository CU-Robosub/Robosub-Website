'use client';

import Link from "next/link";
import { ReactNode, useState } from "react";

export interface NavLinkProps {
    href: string;
    className?: string;
    children: ReactNode;
    borderColor?: string; // Optional prop for border color
}

export function NavLink({ href, className, children, borderColor = "border-black" }: NavLinkProps) {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <Link href={href} className={`relative flex flex-row items-center ${className}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <span>{children}</span>
            <div className={`absolute top-0 h-full duration-300 border-b-2 border-solid ${borderColor} ease-out
                ${hover ? 'w-full' : 'w-0'}`
            }></div>
        </Link>
    );
}