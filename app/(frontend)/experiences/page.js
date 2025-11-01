"use client";
import Image from "next/image";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {FiArrowLeft} from "react-icons/fi"; 

export default function MyExperiences(){
    const router = useRouter();
    const [entered, setEntered] = useState(false);
    const [modalImage, setModalImage] = useState(null);

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
        <main className="min-h-screen">
            <div>
                <h1
                className="text-lg text-black font-semibold mt-4 ml-4">
                    Report #001: My Courses
                </h1>
                <div className="flex flex-wrap gap-1 md:gap-10">
                    <button
                    onClick={() => setModalImage('/report11.webp')}
                    className="ml-4 mt-4 h-fit py-5 md:py-10 px-5 text-[10px] md:text-[15px] bg-[#353227] text-white rounded-lg hover:scale-105 duration-75">
                    Web Development
                    </button>

                    <button
                    onClick={() => setModalImage('/report12.webp')}
                    className="ml-4 mt-4 h-fit py-5 md:py-10 px-5 text-[10px] md:text-[15px] bg-[#353227] text-white rounded-lg hover:scale-105 duration-75"
                    >Image Processing
                    </button>

                    <button
                    onClick={() => setModalImage('/report13.webp')}
                    className="ml-4 mt-4 h-fit py-5 md:py-10 px-5 text-[10px] md:text-[15px] bg-[#353227] text-white rounded-lg hover:scale-105 duration-75"
                    >Artificial Intelligence
                    </button>

                    <button
                    onClick={() => setModalImage('/report14.webp')}
                    className="ml-4 mt-4 h-fit py-5 md:py-10 px-5 text-[10px] md:text-[15px] bg-[#353227] text-white rounded-lg hover:scale-105 duration-75"
                    >Fundamental <br/> Cyber Security
                    </button>
                </div>
            </div>

            <div>
                <h2
                className="text-lg text-black font-semibold mt-4 ml-4">
                    Report #002: My Events
                </h2>
                <div className="flex flex-row gap-1 md:gap-10">
                    <button
                    onClick={() => setModalImage('/report21.webp')}
                    className="ml-4 mt-4 h-fit py-5 md:py-10 px-5 text-[10px] md:text-[15px] bg-[#353227] text-white rounded-lg hover:scale-105 duration-75"
                    >Technocorner 2025
                    </button>

                    <button
                    onClick={() => setModalImage('/report22.webp')}
                    className="ml-4 mt-4 h-fit py-5 md:py-10 px-5 text-[10px] md:text-[15px] bg-[#353227] text-white rounded-lg hover:scale-105 duration-75"
                    >Pionir Kesatria 2025
                    </button>
                </div>
            </div>

            <div>
                <h3
                className="text-lg text-black font-semibold mt-4 ml-4">
                    Report #003: My Organization
                </h3>
                <button
                onClick={() => setModalImage('/report31.webp')}
                className="ml-4 mt-4 h-fit py-5 md:py-10 px-5 text-[10px] md:text-[15px] bg-[#353227] text-white rounded-lg hover:scale-105 duration-75"
                >KMTETI (Keluarga Mahasiswa <br/> Teknik Elektro dan Teknologi Informasi)
                </button>
            </div>
        </main>
            {modalImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    
                    <div className="absolute inset-0 bg-black/30" onClick={() => setModalImage(null)} />

                    <div className="relative z-10 p-4">
                        <button
                          onClick={() => setModalImage(null)}
                          className="absolute -top-2 -right-2 z-20 bg-white hover:bg-[#bfbfbf] rounded-full w-8 h-8 flex items-center justify-center"
                          aria-label="Close"
                        >
                          ×
                        </button>

                        <div className="rounded-lg overflow-hidden bg-transparent">
                            <Image
                                src={modalImage}
                                alt="Report"
                                width={1000}
                                height={800}
                                className="max-w-[90vw] md:max-w-[60vw] max-h-[80vh] object-contain transition-transform duration-200 ease-out"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}