import ScrollReveal from "./ScrollReveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => (
  <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>
    <div className="relative z-10 text-center text-primary-foreground px-4">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{subtitle}</p>}
      </ScrollReveal>
    </div>
  </section>
);

export default PageHero;
