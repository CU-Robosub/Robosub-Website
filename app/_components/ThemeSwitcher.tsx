'use client';

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure the component is mounted before rendering to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    function themeChange() {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }

    if (!mounted) {
        return null; // or a loading spinner/skeleton
    }

    return (
        <div onClick={themeChange} className="flex-row items-center cursor-pointer py-1 px-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 bg-blue-800 hover:bg-blue-950 duration-150 rounded-xl">
            <Image className="hidden dark:block" src="/svg/sun.svg" width={25} height={25} alt="sun" />
            <Image className="dark:hidden" src="/svg/moon.svg" width={25} height={25} alt="moon" />
        </div>
    );
}