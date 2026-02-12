import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Leaf, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Regular home cleaning services customized to your lifestyle. We handle everything from dusting to deep sanitization.",
    features: ["Weekly/Bi-weekly options", "All rooms included", "Flexible scheduling"],
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Keep your workspace spotless and professional. We work around your schedule to minimize disruption.",
    features: ["After-hours service", "Office & retail spaces", "Contract options"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning for those times when you need a thorough refresh. Perfect for spring cleaning or move-in/out.",
    features: ["Every corner covered", "Appliance cleaning", "One-time or regular"],
  },
];

const benefits = [
  { icon: Leaf, title: "Eco-Friendly", description: "Safe, green products" },
  { icon: Clock, title: "Flexible", description: "Your schedule matters" },
  { icon: Shield, title: "Insured", description: "Fully covered service" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Cleaning Solutions for Every Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From regular home maintenance to intensive deep cleans, we offer comprehensive 
            services designed to keep your space immaculate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:shadow-hover hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-gradient-hero transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-hero rounded-2xl p-8"
        >
          <div className="grid sm:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 justify-center sm:justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-primary-foreground">{benefit.title}</div>
                  <div className="text-sm text-primary-foreground/80">{benefit.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
