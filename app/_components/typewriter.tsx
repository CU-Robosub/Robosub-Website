'use client';

import { useEffect, useState } from "react";

export default function Typerwriter({ children, stagger }: { children: string; stagger: number }) {
  const [currentText, setCurrentText] = useState<string>("");

  useEffect(() => {
    setCurrentText("")
    let isCancelled = false; 

    async function type() {
      for (let i = 0; i < children.length; i++) {
        if (isCancelled) return;
        setCurrentText(curr => curr + children.charAt(i));
        await new Promise(r => setTimeout(r, stagger));
      }
    }

    type();

    return () => {
      isCancelled = true; 
    };
  }, [children, stagger]); 

  return <span>{currentText}</span>; 
}
