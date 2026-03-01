import { Link } from "react-router-dom";
import {
  Heart, Users, Home, Briefcase, Car, Sparkles, Stethoscope, Shield,
  Baby, AlertTriangle, GraduationCap, ArrowRight, Accessibility,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";

const services = [
  { icon: Heart, title: "Respite Services", desc: "Our respite services offer temporary relief for caregivers, allowing them to take a well-deserved break while ensuring their loved ones receive compassionate, quality care and support." },
  { icon: Users, title: "Adult Day Services (A.M. & P.M.)", desc: "We provide structured adult day programs in both morning and afternoon sessions. Designed to offer social engagement, therapeutic activities, and a safe environment for adults needing daytime support." },
  { icon: Sparkles, title: "Community Group Activities", desc: "Join our vibrant community group activities that promote inclusion and social interaction. These programs are designed to strengthen community ties and encourage active participation." },
  { icon: Briefcase, title: "Vocational Rehabilitation", desc: "Our vocational rehabilitation services help individuals gain the skills and confidence needed to find and maintain meaningful employment — focusing on personal strengths and individual career goals." },
  { icon: Accessibility, title: "Horse & Animal Interactions", desc: "Experience the healing power of horse and animal-assisted therapy. These interactions promote emotional well-being and personal development in a safe, nurturing, and therapeutic environment." },
  { icon: Baby, title: "CANS Assessment (Children)", desc: "We conduct certified Child and Adolescent Needs and Strengths (CANS) assessments to identify each child's unique needs and ensure they receive the right support and services promptly." },
  { icon: Stethoscope, title: "On-Call Nurse Services", desc: "Our on-call nursing staff provides immediate medical support whenever needed. Trained professionals are available around the clock to address medical concerns efficiently and safely." },
  { icon: Home, title: "Group Home Services for Children", desc: "We offer safe, structured, and supportive group home environments for children. Our team focuses on individual needs, personal growth, and overall well-being." },
  { icon: AlertTriangle, title: "Emergency Respite Placement (Children)", desc: "When children need immediate support, our emergency respite placement program ensures a safe, nurturing environment during times of crisis — available when families need it most." },
  { icon: GraduationCap, title: "Staff Training (CPI & PFS)", desc: "All our staff are trained in Crisis Prevention Institute (CPI) techniques and Prevention & Family Support (PFS) protocols — ensuring safety, professionalism, and high-quality care at all times." },
  { icon: Car, title: "Non-Medical Transportation", desc: "Our reliable non-medical transportation service provides safe rides to appointments, activities, and events. All drivers are trained, caring, and committed to passenger well-being." },
];

const Services = () => (
  <main>
    <PageHero title="Our Services" subtitle="Comprehensive care services tailored to your needs" image={images.servicesCare} />

    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Full Range of Support Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We provide caregiving services to clients 7 days a week, 24 hours per day, across 88 Ohio counties.</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.05}>
              <div className="bg-card border rounded-xl p-6 card-hover group h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container-main text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Need Help Choosing a Service?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Contact us for a free consultation and we'll help you find the right care solution.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Services;
