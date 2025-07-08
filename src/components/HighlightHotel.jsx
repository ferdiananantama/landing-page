import Image from "next/image";

export default function HighlightHotel({
  className = "absolute top-12 right-18",
  src,
  alt = "Home Preview",
  width = 120,
  height = 120,
}) {
  return (
    <div className={className}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="rounded mb-2"
      />
    </div>
  );
}
