import Image from "next/image";

export default function StackedImages({ images = [], containerClass = "relative w-[300px] md:w-[700px] h-[500px] md:h-[800px] flex justify-center" }) {
  return (
    <div className={containerClass}>
      {images.map((img, i) => (
        <Image key={i} width={img.width || 150} height={img.height || 100} src={img.src} alt={img.alt} className={img.className} />
      ))}
    </div>
  );
}