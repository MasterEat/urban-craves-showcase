import { Flame, Leaf, Building2, Wine } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const highlights = [
  { icon: Flame, title: "Bold Flavors", desc: "Recipes crafted with spice, smoke, and global inspiration that pack a punch." },
  { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced, seasonal produce and premium cuts — quality you can taste." },
  { icon: Building2, title: "Urban Atmosphere", desc: "Industrial-chic design, warm lighting, and a social vibe that feels like home." },
  { icon: Wine, title: "Crafted Drinks", desc: "Handcrafted cocktails, local wines, and artisan beverages made with care." },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-dark-surface" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.25em] uppercase text-sm font-semibold mb-3">The Experience</p>
          <h2 className="section-title">WHY URBAN CRAVES</h2>
          <p className="section-subtitle">More than just a meal — it's a vibe.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={`bg-card rounded-lg p-8 text-center hover-lift ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <h.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-display text-2xl tracking-wider text-foreground mb-3">{h.title.toUpperCase()}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
