import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4 md:py-5" aria-label="Main navigation">
        <a href="#home" className="font-display text-2xl md:text-3xl tracking-widest text-primary">
          URBAN CRAVES
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-body text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300 uppercase"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              Book a Table
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-xl tracking-widest text-foreground hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label.toUpperCase()}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold tracking-wider uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Book a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
