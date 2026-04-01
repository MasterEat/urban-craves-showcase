import { Star } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const reviews = [
  {
    name: "Maria K.",
    text: "The Urban Smash burger is absolutely insane — best burger in Athens hands down. The vibe, the music, the cocktails… we keep coming back every weekend.",
    rating: 5,
  },
  {
    name: "Dimitris L.",
    text: "Perfect brunch spot. The Royal Benedict is chef's kiss, and the staff makes you feel like family. This place has serious style too — super photogenic.",
    rating: 5,
  },
  {
    name: "Sophie A.",
    text: "We celebrated my birthday here and it was unforgettable. The food was incredible, the Copper Old Fashioned is a must-try, and the atmosphere is so warm and trendy.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-dark-surface" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.25em] uppercase text-sm font-semibold mb-3">What They Say</p>
          <h2 className="section-title">GUEST REVIEWS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`bg-card rounded-lg p-8 hover-lift ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
              <p className="font-display text-lg tracking-wider text-foreground">{r.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
