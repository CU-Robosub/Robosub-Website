'use client';

import Link from "next/link";
import { useState } from "react";

export interface NavLinkProps {
    destination: string;
    text: string;
}

export function NavLink({ destination, text }: NavLinkProps) {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <Link href={destination} className="cursor-pointer relative" 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <span>{text}</span>
            <div className={`absolute top-0 h-full duration-300 border-b-2 border-solid border-black ease-out
                ${hover ? 'w-full' : 'w-0'}`
            }></div>
            
        </Link>
    );
}