import menuBurgers from "@/assets/menu-burgers.jpg";
import menuStreet from "@/assets/menu-street.jpg";
import menuBrunch from "@/assets/menu-brunch.jpg";
import menuSalads from "@/assets/menu-salads.jpg";
import menuCocktails from "@/assets/menu-cocktails.jpg";
import menuDesserts from "@/assets/menu-desserts.jpg";
import { useScrollReveal } from "./useScrollReveal";

const categories = [
  { title: "Burgers", desc: "Smash burgers, loaded patties & gourmet creations", img: menuBurgers, alt: "Gourmet smash burger with melted cheese Urban Craves Athens" },
  { title: "Street Bites", desc: "Tacos, sliders, loaded fries & global street flavors", img: menuStreet, alt: "Crispy street food tacos with fresh toppings Urban Craves Athens" },
  { title: "Brunch", desc: "Weekend brunch classics & eggs-cellent dishes", img: menuBrunch, alt: "Elegant brunch eggs benedict and avocado toast Urban Craves Athens" },
  { title: "Salads", desc: "Fresh bowls, seasonal greens & hearty salads", img: menuSalads, alt: "Fresh gourmet salad with grilled chicken Urban Craves Athens" },
  { title: "Cocktails", desc: "Handcrafted cocktails, wines & signature drinks", img: menuCocktails, alt: "Craft cocktails with amber tones Urban Craves Athens bar" },
  { title: "Desserts", desc: "Indulgent sweets & handmade treats", img: menuDesserts, alt: "Chocolate lava cake with ice cream and caramel Urban Craves Athens" },
];

const MenuSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="menu" className="section-padding bg-dark-surface" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.25em] uppercase text-sm font-semibold mb-3">What We Serve</p>
          <h2 className="section-title">SIGNATURE MENU</h2>
          <p className="section-subtitle">Explore our bold and flavorful menu categories crafted with passion and the finest ingredients.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group relative overflow-hidden rounded-lg cursor-pointer hover-lift ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={cat.img}
                alt={cat.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={640}
                height={640}
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/75 transition-colors duration-300 flex flex-col justify-end p-6">
                <h3 className="font-display text-3xl tracking-wider text-foreground mb-1">{cat.title.toUpperCase()}</h3>
                <p className="text-foreground/60 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
          >
            Explore Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
