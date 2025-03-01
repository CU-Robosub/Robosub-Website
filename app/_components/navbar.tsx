"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "./navLink";

 
export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
 
  const [visible, setVisible] = useState(false);
  const [bgcolor, setBgcolor] = useState(false);

  useEffect(() => {
    if (pathname === "/" || pathname === "/sponsors" || pathname === "/technology") {
      setBgcolor(false);
      setVisible(true);
    } else {
      setBgcolor(true);
      setVisible(false);
    }
  }, [pathname]);

 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if(pathname === "/" || pathname === "/sponsors" || pathname==="/technology") {return}
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
 
      if (scrollYProgress.get() < 0.025) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
 
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -50,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden md:flex w-full fixed top-0 inset-x-0 mx-auto pr-2 pl-8 py-2 z-50 align-middle",
          {
            "bg-slate-50 shadow-md": bgcolor
                      }
  
        )}
      >
        
        <NavLink href="/" className="mr-auto text-3xl font-semibold">Colorado Robosub</NavLink>
        <div className="text-lg flex flex-row  md:w-1/2 lg:w-1/3 justify-around font-semibold">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/technology">Technology</NavLink>
            <NavLink href="/teams">Subteams</NavLink>
            <NavLink href="/sponsors">Sponsors</NavLink>
            <div className="flex-row items-center cursor-pointer py-1 px-4 bg-blue-500 hover:bg-blue-400 duration-150 rounded-xl">
                Join
            </div>
        </div>

    
        
        
      </motion.div>
    </AnimatePresence>
  );
};