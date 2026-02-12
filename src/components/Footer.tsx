import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">
                Martis Cleaning
              </span>
            </a>
            <p className="text-primary-foreground/60 max-w-sm">
              Professional cleaning services for homes and businesses. Making your 
              space shine since 2014.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Deep Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Move In/Out Cleaning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/40 text-sm">
              © 2024 Martis Cleaning. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
