"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";
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
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";



export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [bgcolor, setBgcolor] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === "/" || pathname === "/sponsors" || pathname === "/technology") {
      setBgcolor(false);
      setVisible(true);
    } else {
      setBgcolor(true);
      setVisible(false);
    }

  
  }, [pathname]);

  function themeChange(e: any) {
    e.stopPropagation();
    document.documentElement.classList.toggle('dark');
    
  }

 


  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (pathname === "/" || pathname === "/sponsors" || pathname === "/technology") { return }
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
    <>
      <div className={`z-50 duration-150 fixed md:hidden top-0 left-0 flex ${!open ? "-translate-x-44" : ""}`}>
        <div onClick={()=> setOpen(!open)} className={`h-[100vh] duration-150 bg-white dark:bg-gray-900 w-44 border-r-2 border-gray-400 flex flex-col p-1 gap-4 text-xl`}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/technology">Technology</NavLink>
          <NavLink href="/teams">Subteams</NavLink>
          <NavLink href="/sponsors">Sponsors</NavLink>
          <div className="flex-row items-center text-center cursor-pointer  py-1 w-2/5 bg-blue-500 dark:bg-blue-900 hover:bg-blue-400 duration-150 rounded-xl">
            Join
          </div>
          <div className="w-2/5">
            <ThemeSwitcher/>
          </div>
        </div>
        <div onClick={() => {setOpen(!open)}} className={`duration-150 cursor-pointer relative top-1 left-1 w-10 h-10 border-gray-400 dark:bg-gray-900 bg-white border-2 rounded-md`}>
          <Image src="/svg/hamburger.svg" fill alt="menu_icon" className={`duration-150 ${!open ? "": "-rotate-90"}`} />
        </div>


      </div>
      <AnimatePresence mode="wait" >
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
            "hidden md:flex w-auto justify-between fixed top-0 inset-x-0 pr-2 pl-8 py-2 z-50 px-14 align-middle",
            {
              "bg-slate-50 dark:bg-gray-900 shadow-md": bgcolor
            }

          )}
        >


          <NavLink href="/" className="md:text-xl lg:text-3xl">Colorado Robosub</NavLink>
          <div className="lg:text-lg md:text-base flex flex-row gap-5 w-auto justify-around align-middle">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/technology">Technology</NavLink>
            <NavLink href="/teams">Subteams</NavLink>
            <NavLink href="/sponsors">Sponsors</NavLink>
            <div className="flex-row items-center cursor-pointer py-1 px-4 bg-blue-500 dark:bg-blue-900 hover:bg-blue-400 dark:hover:bg-blue-950 duration-150 rounded-xl">
              Join
            </div>
            <ThemeSwitcher/>
          </div>




        </motion.div>
      </AnimatePresence>
    </>
  );
};