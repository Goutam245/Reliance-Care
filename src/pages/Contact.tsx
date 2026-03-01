import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <main>
      <PageHero title="Contact Us" subtitle="We're here to help — reach out today" image={images.contactOffice} />

      <section className="section-padding">
        <div className="container-main grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">Get In Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                If you have any questions or want to set up a free consultation, message or call us today!
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "3454 Oak Alley Ct., Suite 108, Toledo, OH 43606" },
                  { icon: Phone, label: "(419) 704-0316", href: "tel:4197040316" },
                  { icon: Mail, label: "info@reliancecaresolutions.com", href: "mailto:info@reliancecaresolutions.com" },
                  { icon: Clock, label: "Mon – Fri, 9am – 5pm" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="pt-2">
                      {item.href ? (
                        <a href={item.href} className="text-sm hover:text-primary transition-colors">{item.label}</a>
                      ) : (
                        <span className="text-sm">{item.label}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden border h-64">
                <iframe
                  title="Reliance Care Solutions location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5!2d-83.62!3d41.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM5JzM2LjAiTiA4M8KwMzcnMTIuMCJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-card border rounded-xl p-6 md:p-8 space-y-4 sticky top-32">
              <h3 className="text-xl font-heading font-semibold mb-2">Send Us a Message</h3>
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
                <label className="text-sm font-medium mb-1 block">How can we help you? *</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              </div>
              <button type="submit" className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
