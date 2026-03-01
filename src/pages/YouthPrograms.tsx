import { Link } from "react-router-dom";
import { Baby, Home, AlertTriangle, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";

const programs = [
  { icon: Baby, title: "CANS Assessment", desc: "Certified Child and Adolescent Needs and Strengths assessments to identify each child's unique needs and guide appropriate services." },
  { icon: Home, title: "Group Home Services", desc: "Safe, structured, and supportive group home environments focused on individual needs, personal growth, and overall well-being." },
  { icon: AlertTriangle, title: "Emergency Respite Placement", desc: "Immediate safe and nurturing environments during times of crisis — available when families need it most." },
  { icon: Sparkles, title: "Community Activities", desc: "Group activities that promote inclusion, social interaction, and community ties for youth of all abilities." },
];

const YouthPrograms = () => (
  <main>
    <PageHero title="Youth Programs" subtitle="Supporting Ohio's Youth — Every Step of the Way" image={images.heroYouth} />

    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Dedicated to Ohio's Children & Teens</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Reliance Care Solutions, we believe every young person deserves a safe, supportive, and empowering environment. Our youth programs are designed to provide comprehensive care, assessments, and community engagement for children and adolescents across Ohio.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {programs.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="bg-card border rounded-xl p-6 card-hover h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-section-light rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-heading font-bold mb-4">Who Qualifies?</h3>
            <ul className="space-y-3">
              {[
                "Children and adolescents with developmental disabilities",
                "Youth in need of emergency respite or crisis placement",
                "Families seeking CANS assessments for their child",
                "Children eligible for Ohio DODD waiver programs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container-main text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Get Your Child Enrolled</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Contact us today to learn more about our youth programs and how we can help your family.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default YouthPrograms;
