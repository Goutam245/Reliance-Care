import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "All Services", path: "/services" },
      { label: "Youth Programs", path: "/youth-programs" },
    ],
  },
  { label: "Youth Programs", path: "/youth-programs" },
  { label: "Who We Serve", path: "/who-we-serve" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="container-main flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" />
            <a href="tel:4197040316" className="hover:underline">(419) 704-0316</a>
            <span className="hidden sm:inline ml-4">Mon – Fri, 9am – 5pm</span>
          </div>
          <Link
            to="/careers"
            className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-heading font-semibold hover:opacity-90 transition-opacity"
          >
            APPLY NOW
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-md"
            : "bg-card"
        }`}
      >
        <div className="container-main flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Reliance Care Solutions logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium font-heading transition-colors ${
                  location.pathname === item.path
                    ? "text-primary bg-secondary"
                    : "text-foreground hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t animate-slide-in-right">
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-md text-sm font-heading font-medium ${
                    location.pathname === item.path
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg text-sm font-heading font-semibold text-center"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
