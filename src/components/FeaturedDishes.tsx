import { useScrollReveal } from "./useScrollReveal";
import menuBurgers from "@/assets/menu-burgers.jpg";
import menuStreet from "@/assets/menu-street.jpg";
import menuBrunch from "@/assets/menu-brunch.jpg";
import menuDesserts from "@/assets/menu-desserts.jpg";
import menuSalads from "@/assets/menu-salads.jpg";
import menuCocktails from "@/assets/menu-cocktails.jpg";

const dishes = [
  { name: "The Urban Smash", desc: "Double smash patty, aged cheddar, caramelized onions, smoky BBQ, brioche bun", price: "€14.90", img: menuBurgers, alt: "The Urban Smash burger signature dish Urban Craves Athens" },
  { name: "Street Tacos Trio", desc: "Pulled pork, crispy chicken & grilled shrimp tacos with house-made salsas", price: "€12.50", img: menuStreet, alt: "Street tacos trio pulled pork crispy chicken Urban Craves Athens" },
  { name: "Royal Benedict", desc: "Poached eggs, hollandaise, smoked salmon, avocado on sourdough toast", price: "€11.90", img: menuBrunch, alt: "Royal Benedict eggs brunch Urban Craves Athens" },
  { name: "The Powerhouse Bowl", desc: "Grilled chicken, quinoa, roasted veggies, pomegranate, tahini dressing", price: "€13.50", img: menuSalads, alt: "Powerhouse bowl grilled chicken salad Urban Craves Athens" },
  { name: "Copper Old Fashioned", desc: "Bourbon, orange bitters, smoked maple syrup, flamed orange peel", price: "€11.00", img: menuCocktails, alt: "Copper Old Fashioned craft cocktail Urban Craves Athens" },
  { name: "Molten Lava Cake", desc: "Dark chocolate lava cake, vanilla bean gelato, salted caramel drizzle", price: "€9.50", img: menuDesserts, alt: "Molten lava chocolate cake dessert Urban Craves Athens" },
];

const FeaturedDishes = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.25em] uppercase text-sm font-semibold mb-3">Chef's Selection</p>
          <h2 className="section-title">MUST-TRY DISHES</h2>
          <p className="section-subtitle">Our most-loved creations that keep Athens coming back for more.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className={`bg-card rounded-lg overflow-hidden hover-lift ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={dish.img}
                alt={dish.alt}
                className="w-full h-52 object-cover"
                loading="lazy"
                width={640}
                height={640}
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-2xl tracking-wider text-foreground">{dish.name.toUpperCase()}</h3>
                  <span className="text-primary font-semibold text-lg whitespace-nowrap">{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
