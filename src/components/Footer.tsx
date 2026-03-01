import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ArrowRight, Send } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Youth Programs", path: "/youth-programs" },
  { label: "Who We Serve", path: "/who-we-serve" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  "Respite Services",
  "Adult Day Services",
  "Group Home for Children",
  "Vocational Rehabilitation",
  "Non-Medical Transportation",
  "Community Activities",
  "Horse & Animal Therapy",
  "On-Call Nurse Services",
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer>
      {/* Wave separator */}
      <div className="relative h-16 bg-background overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 64" preserveAspectRatio="none" fill="none">
          <path d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V64H0V32Z" fill="#0D3D30" />
        </svg>
      </div>

      {/* Orange top accent */}
      <div style={{ height: 4, backgroundColor: "#E8734A" }} />

      {/* Newsletter strip */}
      <div style={{ backgroundColor: "#1B6B5A" }} className="py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-heading font-semibold text-sm sm:text-base">
            Stay Connected with Reliance Care Solutions
          </p>
          <form onSubmit={handleSubscribe} className="flex w-full sm:w-auto max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2.5 rounded-l-lg text-sm bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-r-lg font-heading font-semibold text-sm text-white flex items-center gap-1.5 shrink-0 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#E8734A" }}
            >
              Subscribe <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ backgroundColor: "#0D3D30" }} className="px-4 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Brand */}
          <div>
            <img src={logo} alt="Reliance Care Solutions" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm italic leading-relaxed mb-5" style={{ color: "#C8DDD8" }}>
              "Our fingerprints do not fade from the lives we touch."
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "#1B6B5A" }}
                aria-label="Instagram"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8734A")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1B6B5A")}
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "#1B6B5A" }}
                aria-label="Facebook"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8734A")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1B6B5A")}
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-heading font-medium text-white"
              style={{ backgroundColor: "#1B6B5A" }}
            >
              ✓ Ohio DODD Certified Provider
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4
              className="font-heading font-semibold text-sm uppercase tracking-[2px] mb-6"
              style={{ color: "#F5C842" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm flex items-center gap-1 group transition-colors duration-300"
                    style={{ color: "#C8DDD8" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E8734A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#C8DDD8")}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4
              className="font-heading font-semibold text-sm uppercase tracking-[2px] mb-6"
              style={{ color: "#F5C842" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#C8DDD8" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E8734A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#C8DDD8")}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4
              className="font-heading font-semibold text-sm uppercase tracking-[2px] mb-6"
              style={{ color: "#F5C842" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "#1B6B5A" }}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "#C8DDD8" }}>
                  3454 Oak Alley Ct., Suite 108,<br />Toledo, OH 43606
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#1B6B5A" }}
                >
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:4197040316" className="text-sm font-medium transition-colors duration-300" style={{ color: "#E8734A" }}>
                  (419) 704-0316
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#1B6B5A" }}
                >
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:info@reliancecaresolutions.com" className="text-sm font-medium transition-colors duration-300 break-all" style={{ color: "#E8734A" }}>
                  info@reliancecaresolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "#1B6B5A" }}
                >
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm" style={{ color: "#C8DDD8" }}>
                  <span className="font-medium">Office Hours:</span>
                  <br />Mon – Fri: 9:00am – 5:00pm
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar divider */}
      <div style={{ height: 1, backgroundColor: "#1B6B5A" }} />

      {/* Bottom bar */}
      <div style={{ backgroundColor: "#071F19" }} className="py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "#7A9E98" }}>
          <p>© 2025 Reliance Care Solutions. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <img src={logo} alt="" className="h-5 w-auto brightness-0 invert opacity-40" />
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span>|</span>
            <span className="hover:text-white transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
