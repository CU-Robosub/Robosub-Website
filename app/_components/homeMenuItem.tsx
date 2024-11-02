'use client';

import { useEffect, useRef, useState } from "react";

export default function HomeMenuItem({title, text}: {title: string; text: string}) {
    const [desc, setDesc] = useState<string>("");
    const [hover, setHover] = useState<boolean>(false);
    const hoverRef = useRef<boolean>(false);

    useEffect(() => {
        async function type() {
            setDesc("");
            for (let i = 0; i < text.length; i++) {
                if (!hoverRef.current) return;
                setDesc(desc => desc + text.charAt(i));
                await new Promise(r => setTimeout(r, 15));
            }
        }

        async function untype() {
            while(desc.length > 0) {
               if (hoverRef.current) return;
               setDesc(desc => desc.substring(0, desc.length - 1));
               await new Promise(r => setTimeout(r, 10));
            }
        }

        if (hover) type();
        else untype();

    }, [hover]);  

    const handleMouseEnter = () => {
        hoverRef.current = true;
        setHover(true);
        setDesc("");  
    };

    const handleMouseLeave = () => {
        setHover(false);
        hoverRef.current = false;
    };

    return (
        <div className="text-2xl flex items-center">
            <span 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="font-bold cursor-pointer border-solid border-black border-2 p-2 text-center w-52">{title}</span>
            <span className="ml-2">{desc}</span>
        </div>
    );
}
