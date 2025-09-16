import { Link } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">PlantInfo</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your comprehensive guide to plant information. Discover, learn, and explore 
              the wonderful world of plants with detailed information and beautiful imagery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
              >
                Home
              </Link>
              <Link 
                to="/gallery" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
              >
                Plant Gallery
              </Link>
              <Link 
                to="/about" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Plant Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Plant Categories</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <span className="text-primary-foreground/80">Herbs</span>
              <span className="text-primary-foreground/80">Succulents</span>
              <span className="text-primary-foreground/80">Trees</span>
              <span className="text-primary-foreground/80">Flowering Plants</span>
              <span className="text-primary-foreground/80">Indoor Plants</span>
              <span className="text-primary-foreground/80">Medicinal Plants</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">info@plantinfo.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">123 Green Street, Plant City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 PlantInfo. All rights reserved. Plant information sourced from various botanical databases.
            </p>
            <div className="text-primary-foreground/60 text-sm">
              Made with 🌱 for plant lovers everywhere
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;