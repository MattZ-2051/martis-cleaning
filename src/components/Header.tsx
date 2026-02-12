import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Martis <span className="text-gradient">Cleaning</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Services
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            About
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+1234567890" className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-medium">(123) 456-7890</span>
          </a>
          <Button variant="default" size="sm">
            Get a Quote
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
