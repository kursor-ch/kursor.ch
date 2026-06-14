import Image from "next/image";

interface GuideHeroImageProps {
  src: string;
  alt: string;
}

export function GuideHeroImage({ src, alt }: GuideHeroImageProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", borderRadius: 16, marginBottom: 32 }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1120px"
        priority
      />
    </div>
  );
}
