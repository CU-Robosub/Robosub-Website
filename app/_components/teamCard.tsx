"use client";

import React, { Children } from "react";
import {motion} from "framer-motion";



interface TeamCardProps {
    title: string;
    imgURL?: string;
    left?: boolean;
    children?: string; 
}

export default function TeamCard({ title, imgURL, left, children }: TeamCardProps) {
    return (
        <div className="w-4/5 mx-auto pt-10 flex flex-wrap">
            {left && <img className="w-full md:w-3/5 lg:w-2/5 mr-auto shadow-lg" src={imgURL} alt="software_img"></img> }
            <div className="w-full lg:w-1/2">
                <motion.div
                    initial = {{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                >
                    <h1 className="text-3xl md:text-6xl inline border-black border-b-2">{title}</h1>
                </motion.div>
                <motion.div
                    initial = {{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                >
                <p className="text-xl my-10 md:text-2xl">
                    {children}
                </p>
                </motion.div>
            </div>
            {!left && <img className="w-full md:w-3/5 lg:w-2/5 ml-auto shadow-lg" src={imgURL} alt="software_img"></img>  }
                   
        </div>
    );
}
