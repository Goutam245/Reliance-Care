import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart, Users, Home, Briefcase, Car, Sparkles, Shield, Star,
  ArrowRight, CheckCircle, Quote,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CounterSection from "@/components/CounterSection";
import { images } from "@/lib/images";

const services = [
  { icon: Heart, title: "Respite Care", desc: "Temporary relief for caregivers with compassionate, quality support." },
  { icon: Users, title: "Adult Day Services", desc: "Structured programs for social engagement and therapeutic activities." },
  { icon: Home, title: "Group Home for Children", desc: "Safe, structured environments focused on personal growth." },
  { icon: Briefcase, title: "Vocational Rehabilitation", desc: "Skills and confidence for meaningful employment." },
  { icon: Car, title: "Non-Medical Transportation", desc: "Safe, reliable rides to appointments and activities." },
  { icon: Sparkles, title: "Community Activities", desc: "Programs promoting inclusion and social interaction." },
];

const whoWeServe = [
  { img: images.serveChildren, title: "Children & Youth", desc: "Safe environments, group homes, emergency respite, and community activities for Ohio's youth.", link: "/youth-programs" },
  { img: images.serveAdults, title: "Adults with Disabilities", desc: "Person-centered care supporting independence, community integration, and quality of life.", link: "/who-we-serve" },
  { img: images.serveSeniors, title: "Seniors & Elderly", desc: "Compassionate in-home support preserving dignity, comfort, and familiar surroundings.", link: "/who-we-serve" },
];

const testimonials = [
  { quote: "Reliance Care Solutions has been a blessing for our family. Their caregivers truly care about my mother's well-being.", name: "Sarah M.", role: "Family Member" },
  { quote: "The staff is incredibly professional and compassionate. They've made a real difference in my son's life.", name: "David K.", role: "Parent" },
  { quote: "I feel safe and supported every day. The team always goes above and beyond.", name: "Maria L.", role: "Client" },
];

const Index = () => {
  return (
    <main>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.heroHome} alt="Professional caregiver helping elderly person at home" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="relative z-10 container-main px-4 py-20">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-heading font-medium mb-6">
                <Shield className="w-4 h-4" />
                Ohio DODD Certified Provider
              </span>
            </motion.div>
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-5" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              Empowering Lives.{" "}
              <span className="text-gold">Strengthening Communities.</span>
            </motion.h1>
            <motion.p className="text-lg text-primary-foreground/90 mb-8 max-w-xl leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
              Northwest Ohio's trusted care agency for individuals with developmental disabilities, seniors, and youth in need.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>
              <Link to="/services" className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity">
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST BAR ═══════ */}
      <section className="bg-card py-6 border-b">
        <div className="container-main flex flex-wrap justify-center gap-8 md:gap-16 px-4 text-sm font-heading font-medium text-muted-foreground">
          {["Ohio DODD Certified", "88 Counties Served", "CPI Certified", "Licensed & Insured"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ SERVICES PREVIEW ═══════ */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Comprehensive Care Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We provide a wide range of support services designed to improve the quality of life for individuals and families across Ohio.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="bg-card border rounded-xl p-6 card-hover group">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <Link to="/services" className="text-sm font-heading font-medium text-primary hover:underline flex items-center gap-1">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ IMPACT NUMBERS ═══════ */}
      <CounterSection />

      {/* ═══════ WHO WE SERVE ═══════ */}
      <section className="section-padding bg-section-light">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Who We Serve</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We provide flexible direct care support for individuals of all ages across 88 Ohio counties.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {whoWeServe.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="bg-card rounded-xl overflow-hidden card-hover">
                  <div className="h-56 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <Link to={item.link} className="text-sm font-heading font-medium text-primary hover:underline flex items-center gap-1">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">What Families Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="bg-card border rounded-xl p-6 relative">
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="text-muted-foreground text-sm mb-4 italic font-accent leading-relaxed">"{t.quote}"</p>
                  <div>
                    <p className="font-heading font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="section-padding bg-section-light">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Why Choose Reliance Care Solutions?</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Improved Quality of Life", desc: "In-home care provides comfort, familiar surroundings, and preserved independence — reducing anxiety and fostering emotional well-being." },
              { icon: Star, title: "Customized Approach", desc: "We understand every client is unique. Our dedicated care providers develop personalized plans to ensure compassionate, tailored care." },
              { icon: Users, title: "Community & Family Focused", desc: "We offer weekly outings, community trips, family nights, and annual group vacations — building connections that matter." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WAIVERS ═══════ */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Waiver & Payment Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Reliance Care Solutions is certified for Individual Options Waiver, Level One Waiver, Self-Finance, and Private Pay.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Level 1 Waiver (L1 Waiver)", desc: "A great choice for individuals and families seeking in-home support and community-based care with flexible scheduling.", color: "bg-primary" },
              { title: "Individual Options Waiver (IO Waiver)", desc: "Provides essential support for individuals seeking to maintain daily independence in their homes and communities.", color: "bg-accent" },
              { title: "Private Pay", desc: "Private Pay provides out-of-pocket funding for accessibility to all services without wait times for enrollment.", color: "bg-gold" },
            ].map((waiver, i) => (
              <ScrollReveal key={waiver.title} delay={i * 0.15}>
                <div className="bg-card border rounded-xl p-6 card-hover">
                  <div className={`w-full h-1.5 ${waiver.color} rounded-full mb-5`} />
                  <h3 className="text-lg font-heading font-semibold mb-3">{waiver.title}</h3>
                  <p className="text-sm text-muted-foreground">{waiver.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA BANNER ═══════ */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Let us help your family today. Schedule a free consultation and learn how we can make a difference.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:opacity-90 transition-opacity">
              Schedule a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
