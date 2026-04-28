import Image from "next/image";

interface ArticleHeroImageProps {
  src: string;
  alt: string;
  category: string;
  categoryColor?: string;
}

export function ArticleHeroImage({
  src,
  alt,
  category,
  categoryColor = "#D97706",
}: ArticleHeroImageProps) {
  return (
    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-10">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <span
        className="absolute bottom-4 left-4 text-xs uppercase tracking-wider text-white font-medium px-3 py-1 rounded-full"
        style={{ backgroundColor: categoryColor }}
      >
        {category}
      </span>
    </div>
  );
}
