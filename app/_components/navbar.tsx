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
    e.stopPropagation()
    document.documentElement.classList.toggle('dark')
    
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
      <div className="z-50 fixed md:hidden top-0 left-0 flex">
        <div onClick={()=> setOpen(!open)} className={`h-[100vh] duration-150 bg-white dark:bg-gray-900 w-44 border-r-2 border-gray-400 flex flex-col p-1 gap-4 text-xl ${open ? "-translate-x-full" : ""}`}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/technology">Technology</NavLink>
          <NavLink href="/teams">Subteams</NavLink>
          <NavLink href="/sponsors">Sponsors</NavLink>
          <div className="flex-row items-center text-center cursor-pointer  py-1 w-2/5 bg-blue-500 dark:bg-blue-900 hover:bg-blue-400 duration-150 rounded-xl">
            Join
          </div>
          <div onClick={themeChange} className="flex-row w-2/5 items-center cursor-pointer py-1 px-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 bg-blue-800  hover:bg-blue-950 duration-150 rounded-xl">
            <Image className="hidden dark:block mx-auto" src="/svg/sun.svg" width={25} height={25} alt="sun" />
            <Image className="dark:hidden mx-auto" src="/svg/moon.svg" width={25} height={25} alt="sun" />
          </div>
        </div>
        <div onClick={() => {setOpen(!open)}} className={`duration-150 cursor-pointer relative top-1 left-1 w-10 h-10 border-gray-400 dark:bg-gray-900 bg-white border-2 rounded-md ${open ? "-translate-x-44" : ""}`}>
          <Image src="/svg/hamburger.svg" fill alt="menu_icon" className={`duration-150 ${open ? "": "-rotate-90"}`} />
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
            "hidden md:flex w-full fixed top-0 inset-x-0 mx-auto pr-2 pl-8 py-2 z-50 align-middle",
            {
              "bg-slate-50 dark:bg-gray-900 shadow-md": bgcolor
            }

          )}
        >

          <NavLink href="/" className="mr-auto text-3xl font-semibold">Colorado Robosub</NavLink>
          <div className="text-lg flex flex-row  md:w-1/2 lg:w-2/5 justify-around font-semibold">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/technology">Technology</NavLink>
            <NavLink href="/teams">Subteams</NavLink>
            <NavLink href="/sponsors">Sponsors</NavLink>
            <div className="flex-row items-center cursor-pointer py-1 px-4 bg-blue-500 dark:bg-blue-900 hover:bg-blue-400 duration-150 rounded-xl">
              Join
            </div>
            <ThemeSwitcher/>
          </div>




        </motion.div>
      </AnimatePresence>
    </>
  );
};