"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {FiArrowLeft} from "react-icons/fi";

export default function MyProjects(){
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
            className="fixed top-4 left-4 z-50 bg-white backdrop-blur-sm rounded-full p-2 shadow hover:bg-[#2b1d0e] transition"
          >
            <FiArrowLeft className="h-5 w-5 text-[#2b1d0e] hover:text-white" />
          </button>

            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col md:flex-row gap-8">
                    <Link 
                      href="https://summarizerai-omega.vercel.app/" 
                      target="_blank"
                      className="py-6 px-5 md:px-8 text-xl md:text-2xl bg-[#353227] text-white rounded shadow hover:scale-105 transition-transform duration-150"
                    >
                      AI-Summarizer
                    </Link>
                    <Link 
                      href="https://web-flower-ai.vercel.app/" 
                      target="_blank"
                      className="py-6 px-5 md:px-8 text-xl md:text-2xl bg-[#353227] text-white rounded shadow hover:scale-105 transition-transform duration-150"
                    >
                      Flower Classifier AI
                    </Link>
                </div>
            </div>
        </>
    );
}