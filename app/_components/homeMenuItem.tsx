'use client';

import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

interface HomeMenuItemProps {
    title: string;
    text: string;
    delay: number;
    url: string;
}

export default function HomeMenuItem({ title, text, delay, url }: HomeMenuItemProps) {
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
            while (desc.length > 0) {
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
        <a href={url}>
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}

        >
            <div className="text-2xl flex flex-row mx-0 items-center">
                <span
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="font-bold cursor-pointer text-2xl border-solid border-black border-2 h-14 text-center w-52 hover:text-3xl duration-75 flex items-center justify-center"
                >
                    {title}
                </span>
                <span className="hidden md:block ml-2">{desc}</span>
            </div>

        </motion.div>
        </a>
    );
}
