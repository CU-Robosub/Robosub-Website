"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SpinLabelProps {
    title: string;
    label: string;
}

export default function SpinLabel({ title, label }: SpinLabelProps) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [trueLabel, setTrueLabel] = useState<string>("0".repeat(label.length));
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const spinLabel = async () => {
            if (isInView && !loaded) {
                for (let i = 0; i < label.length; i++) {
                    for (let j = 0; j < 8; j++) {
                        setTrueLabel(prev => {
                            // Replace the current character with a random digit
                            const randomDigit = Math.floor(Math.random() * 10).toString();
                            return prev.substring(0, i) + randomDigit + prev.substring(i + 1);
                        });
                        await sleep(30);
                    }
                    // Lock in the correct character from the label
                    setTrueLabel(prev => prev.substring(0, i) + label[i] + prev.substring(i + 1));
                }
                setLoaded(true);
            }
        };

        spinLabel();
    }, [isInView, loaded, label]);

    // Calculate minimum width based on character length of `label`
    const minWidth = `${label.length}ch`;

    return (
        <div ref={ref} className="relative flex flex-col">
            <div className="text-3xl font-bold z-10">{title}</div>
            <div
                className="text-9xl font-bold z-10"
                style={{ minWidth, fontFamily: "monospace" }} // Monospaced font for consistent width
            >
                {trueLabel}
            </div>
        </div>
    );
}
