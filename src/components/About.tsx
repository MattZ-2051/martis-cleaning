import { motion } from "framer-motion";
import { Users, Award, Calendar, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Calendar, value: "15K+", label: "Cleans Completed" },
  { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=500&fit=crop"
                alt="Cleaning supplies"
                className="rounded-2xl shadow-card w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=500&fit=crop"
                alt="Clean home interior"
                className="rounded-2xl shadow-card w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Dedicated to Making Your Space Shine
            </h2>
            <p className="text-muted-foreground mb-6">
              At Martis Cleaning, we believe everyone deserves to live and work in a clean, 
              healthy environment. Founded over a decade ago, we've built our reputation on 
              reliability, attention to detail, and genuine care for our clients.
            </p>
            <p className="text-muted-foreground mb-8">
              Our trained professionals use eco-friendly products and proven techniques to 
              deliver exceptional results every time. We're not just cleaning your space—we're 
              giving you back your time and peace of mind.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
