import aboutImg from "@/assets/about.jpg";
import { useScrollReveal } from "./useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className={`overflow-hidden rounded-lg ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <img
              src={aboutImg}
              alt="Urban Craves vibrant dining atmosphere in Athens with industrial-chic interior"
              className="w-full h-[400px] md:h-[520px] object-cover rounded-lg"
              loading="lazy"
              width={800}
              height={1024}
            />
          </div>
          <div className={isVisible ? "animate-fade-in-right" : "opacity-0"}>
            <p className="text-primary tracking-[0.25em] uppercase text-sm font-semibold mb-3">Our Story</p>
            <h2 className="section-title mb-6">WHERE FLAVOR MEETS THE CITY</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Born from a passion for bold flavors and urban culture, Urban Craves brings you a modern casual dining
              experience in the heart of Athens. We combine quality ingredients with creative recipes inspired by street
              food traditions from around the world.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Our industrial-chic space, warm hospitality, and carefully crafted menu make every visit an experience —
              whether you're here for our legendary smash burgers, weekend brunch, or handcrafted cocktails.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-display text-4xl text-primary">5+</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Years</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">50K+</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Happy Guests</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">4.8</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
