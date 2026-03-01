import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";

const groups = [
  { title: "Developmentally Disabled", content: "We provide comprehensive support for individuals with developmental disabilities, including residential services, community activities, vocational rehabilitation, and personalized care plans. Our DODD-certified staff work closely with each individual to promote independence, dignity, and community integration." },
  { title: "Physically Disabled", content: "Our services for physically disabled individuals include in-home support, non-medical transportation, on-call nursing, and daily living assistance. We focus on maintaining independence while ensuring safety and comfort in every aspect of daily life." },
  { title: "Elderly / Seniors", content: "We offer compassionate in-home care for seniors including meal preparation, medication management, companionship, light housekeeping, and personal care. Our goal is to help seniors age gracefully in the comfort of their own homes." },
  { title: "Children & Youth", content: "Our youth programs include group home services, emergency respite placement, CANS assessments, and community group activities. We provide safe, nurturing environments for children and adolescents needing support." },
  { title: "All Ages", content: "Reliance Care Solutions serves individuals of all ages across 88 Ohio counties. Whether you need respite care, adult day services, vocational rehabilitation, or transportation — we're here to help." },
];

const WhoWeServe = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main>
      <PageHero title="Who We Serve" subtitle="Flexible care support for individuals of all ages across Ohio" image={images.community} />

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Our Clients</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer flexible direct care support for individuals with developmental or physical disabilities, seniors, those with cancer and more. We are certified in 88 counties with The Ohio Department of Developmental Disabilities.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {groups.map((group, i) => (
              <ScrollReveal key={group.title} delay={i * 0.05}>
                <div className="bg-card border rounded-xl overflow-hidden">
                  <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-lg hover:bg-secondary/50 transition-colors">
                    {group.title}
                    {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed animate-fade-up">{group.content}</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-light">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ohio DODD Certified Provider</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Reliance Care Solutions is proud to be part of the network of Ohio agencies serving individuals with developmental disabilities. We work closely with the Ohio Department of Developmental Disabilities (DODD) and adhere to the highest standards and best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Level 1 Waiver", "IO Waiver", "Private Pay", "Self-Finance"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-card px-5 py-3 rounded-full border">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-heading font-medium">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How to Join the Ohio DODD Waiver Program</h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Almost 88,000 people in Ohio with disabilities are part of a waiver program. Contact us to learn more.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity">
              Apply Here <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default WhoWeServe;
