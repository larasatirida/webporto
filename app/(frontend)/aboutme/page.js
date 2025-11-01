"use client";
import Image from "next/image";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {FiArrowLeft} from "react-icons/fi";

export default function AboutMe(){
    const router = useRouter();
    const [entered, setEntered] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => {
            setEntered(true);
        }, 20);
        return () => clearTimeout(t);
    }, []);
    return (
        <>
            <button
                onClick={() => router.back()}
                aria-label="Back"
                className="fixed top-4 left-4 z-50 bg-white backdrop-blur-sm rounded-full p-2 shadow hover:bg-[#2b1d0e] transition">
                <FiArrowLeft className="h-5 w-5 text-[#2b1d0e] hover:text-white" />
              </button>
        <div>
            <Image 
            src="/casefile.svg"
            alt="About Me"
            width={600}
            height={400}
            className={`w-full h-auto ${entered ? "fade-in" : "fade-out"}`} />
        </div>
        </>
    );
}