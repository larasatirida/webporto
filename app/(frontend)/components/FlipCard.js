"use client";
import Image from "next/image";

export default function FlipCard({ frontSrc, backSrc, altFront = "cover", altBack = "photo", width = 300 }) {
  const wClass = "w-[150px] md:w-[300px]";
  return (
    <div className="group w-[150px] md:w-[300px] h-auto [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-500 transform-gpu [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
          <Image src={frontSrc} alt={altFront} width={width} height={width} className={`${wClass} h-auto shadow-xl`} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image src={backSrc} alt={altBack} width={width} height={width} className={`${wClass} h-auto shadow-xl`} />
        </div>
      </div>
    </div>
  );
}