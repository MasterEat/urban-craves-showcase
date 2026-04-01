import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { useScrollReveal } from "./useScrollReveal";

const images = [
  { src: gallery1, alt: "Urban Craves gourmet burger and social atmosphere Athens", className: "col-span-1 row-span-1" },
  { src: gallery2, alt: "Chef plating gourmet dish at Urban Craves Athens kitchen", className: "col-span-1 row-span-2" },
  { src: gallery3, alt: "Candlelit dinner table setting Urban Craves Athens restaurant", className: "col-span-1 row-span-1" },
  { src: gallery4, alt: "Loaded fries street food style Urban Craves Athens", className: "col-span-1 row-span-2" },
  { src: gallery5, alt: "Overhead view shared dinner burgers fries Urban Craves Athens", className: "col-span-1 row-span-1" },
  { src: gallery6, alt: "Bartender crafting signature cocktail Urban Craves Athens bar", className: "col-span-1 row-span-1" },
];

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.25em] uppercase text-sm font-semibold mb-3">Follow The Vibe</p>
          <h2 className="section-title">GALLERY</h2>
          <p className="section-subtitle">Snapshots from our kitchen, bar, and dining room — every night is a story.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[240px] gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.className} relative overflow-hidden rounded-lg group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
