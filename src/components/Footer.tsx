import { Globe, ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-14">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <p className="font-display text-3xl tracking-widest text-primary mb-3">URBAN CRAVES</p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Bold flavors, urban energy, and a social dining experience in the heart of Athens.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-display text-xl tracking-wider text-foreground mb-4">NAVIGATE</p>
          <nav aria-label="Footer navigation">
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact & Social */}
        <div>
          <p className="font-display text-xl tracking-wider text-foreground mb-4">CONTACT</p>
          <p className="text-muted-foreground text-sm mb-1">Kolokotroni 25, Psyrri, Athens</p>
          <p className="text-muted-foreground text-sm mb-1">+30 210 123 4567</p>
          <p className="text-muted-foreground text-sm mb-4">hello@urbancraves.gr</p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Urban Craves on Instagram"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Instagram size={18} className="text-foreground" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Urban Craves on Facebook"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Facebook size={18} className="text-foreground" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center">
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Urban Craves. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
