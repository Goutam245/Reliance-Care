import { Heart, Shield, Star, Award, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";

const values = [
  { icon: Heart, title: "Compassion", desc: "We lead with empathy, treating every individual with kindness and genuine care." },
  { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical standards in every interaction." },
  { icon: Star, title: "Dignity", desc: "Every person deserves respect. We honor each individual's worth." },
  { icon: Award, title: "Excellence", desc: "We strive for the highest quality in everything we do." },
];

const About = () => (
  <main>
    <PageHero title="About Reliance Care Solutions" subtitle="15+ years of dedicated care across Northwest Ohio" image={images.heroAbout} />

    <section className="section-padding">
      <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Reliance Care Solutions is a Northwest Ohio agency founded by Direct Support Professionals with over 15 years of combined experience in Developmental Disabilities care. We are person-centered, compassionate, and dedicated to helping every individual achieve their full potential — 7 days a week, up to 24 hours a day, across 88 Ohio counties.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We specialize as Positive Behavior Supports and our goals are to ensure the independence and safety of individuals by providing person-centered, compassionate and quality care, and developing a caring, supportive, trusting relationship with individuals we service.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <img src={images.heroAbout} alt="Diverse care team at Reliance Care Solutions in professional setting" className="rounded-xl shadow-lg w-full" loading="lazy" />
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-section-light">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Our Mission</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Reliance Care Solutions provides residential support and services to individuals with developmental disabilities. We believe our mission is to enrich lives, maintaining and improving the quality of life for those under our care. Our services are designed to achieve positive outcomes for our residents, focusing on self-determination, dignity, and respect for each individual.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-14">Our Core Values</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="bg-card border rounded-xl p-6 text-center card-hover">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-section-dark text-primary-foreground">
      <div className="container-main text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Staff Training & Certifications</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["CPI Certified", "PFS Trained", "BCI/FBI Background Checked", "CPR & First Aid Certified", "Ohio DODD Certified"].map((cert) => (
              <div key={cert} className="flex items-center gap-2 bg-primary-foreground/10 px-5 py-3 rounded-full">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span className="text-sm font-heading font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default About;
