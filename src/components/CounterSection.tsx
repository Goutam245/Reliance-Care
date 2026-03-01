import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Users, Award } from "lucide-react";

const stats = [
  { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
  { icon: MapPin, value: 88, suffix: "", label: "Counties Served" },
  { icon: Clock, value: 24, suffix: "/7", label: "Availability" },
  { icon: Users, value: 100, suffix: "+", label: "Families Helped" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const CounterSection = () => (
  <section className="bg-section-dark text-primary-foreground section-padding">
    <div className="container-main grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
        >
          <stat.icon className="w-8 h-8 mx-auto mb-3 text-gold" />
          <div className="text-4xl md:text-5xl font-heading font-bold mb-1">
            <Counter target={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-sm opacity-80">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CounterSection;
