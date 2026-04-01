import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.25em] uppercase text-sm font-semibold mb-3">Find Us</p>
          <h2 className="section-title">VISIT URBAN CRAVES</h2>
          <p className="section-subtitle">We'd love to see you. Walk in or book ahead — great food awaits.</p>
        </div>

        <div className={`grid md:grid-cols-2 gap-10 max-w-5xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wider text-foreground mb-1">ADDRESS</h3>
                <p className="text-muted-foreground text-sm">Kolokotroni 25, Psyrri<br />Athens 10562, Greece</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wider text-foreground mb-1">PHONE</h3>
                <p className="text-muted-foreground text-sm">+30 210 123 4567</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wider text-foreground mb-1">EMAIL</h3>
                <p className="text-muted-foreground text-sm">hello@urbancraves.gr</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wider text-foreground mb-1">HOURS</h3>
                <p className="text-muted-foreground text-sm">
                  Mon–Thu: 11:00 – 23:00<br />
                  Fri–Sat: 11:00 – 01:00<br />
                  Sun: 10:00 – 22:00
                </p>
              </div>
            </div>

            <a
              href="mailto:hello@urbancraves.gr"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
              aria-label="Make a reservation at Urban Craves Athens"
            >
              Make a Reservation
            </a>
          </div>

          {/* Map placeholder */}
          <div className="bg-card rounded-lg overflow-hidden min-h-[360px] flex items-center justify-center">
            <iframe
              title="Urban Craves Athens location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.0!2d23.725!3d37.977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU4JzM3LjIiTiAyM8KwNDMnMzAuMCJF!5e0!3m2!1sen!2sgr!4v1"
              className="w-full h-full min-h-[360px] border-0 rounded-lg"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
