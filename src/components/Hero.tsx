import heroImg from "@/assets/hero.jpg";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Urban Craves restaurant interior with gourmet burgers and cocktails in Athens"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 gradient-overlay" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
      <p className="font-body text-primary tracking-[0.3em] uppercase text-sm md:text-base mb-4">
        Casual Restaurant &bull; Athens
      </p>
      <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-foreground leading-none mb-6">
        URBAN CRAVES
      </h1>
      <p className="font-body text-foreground/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
        Bold flavors, urban energy, and unforgettable bites — right in the heart of Athens.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#menu"
          className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
        >
          View Menu
        </a>
        <a
          href="#contact"
          className="border border-foreground/30 text-foreground px-8 py-4 rounded-md font-semibold tracking-wider uppercase text-sm hover:border-primary hover:text-primary transition-colors"
        >
          Book a Table
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
