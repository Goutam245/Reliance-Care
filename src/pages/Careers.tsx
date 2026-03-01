import { useState } from "react";
import { CheckCircle, Heart, Users, GraduationCap, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Competitive compensation",
  "Flexible scheduling",
  "CPI & PFS training provided",
  "Supportive team environment",
  "Make a real impact every day",
  "Growth opportunities",
];

const Careers = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", position: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application Submitted!", description: "We'll review your application and get back to you soon." });
    setForm({ firstName: "", lastName: "", email: "", phone: "", position: "", message: "" });
  };

  return (
    <main>
      <PageHero title="Careers" subtitle="Make a Lifelong Impact — Come Work With Us!" image={images.careers} />

      <section className="section-padding">
        <div className="container-main grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">Why Work With Us?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We offer opportunities to work one-on-one and in group settings with clients. As a Direct Support Professional, you can be satisfied with a career that you can see the impact on individuals' lives first-hand. Join us at Reliance Care Solutions and make a difference today.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                {[
                  { icon: GraduationCap, label: "CPI Certified Training" },
                  { icon: Heart, label: "PFS Protocol Training" },
                  { icon: Users, label: "Team-Oriented Culture" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center bg-secondary rounded-xl p-4 flex-1">
                    <item.icon className="w-6 h-6 text-primary mb-2" />
                    <span className="text-xs font-heading font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-card border rounded-xl p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-heading font-semibold mb-2">Apply Now</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">First Name *</label>
                  <input required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Last Name *</label>
                  <input required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Email *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Phone</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Position Interested In</label>
                <input value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Message *</label>
                <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              </div>
              <button type="submit" className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Submit Application
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Careers;
