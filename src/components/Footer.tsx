import { Link } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <Link to="/" className="flex items-center space-x-2 transition-smooth hover:scale-105">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" style={{maxHeight: '56px'}} />
          {/* <span className="text-xl font-bold bg-gradient-nature bg-clip-text text-transparent">
            aasamant
          </span> */}
        </Link>
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
                <a href="mailto:aasamant@gmail.com" className="text-primary-foreground/80 hover:underline">aasamant@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <div className="text-primary-foreground/80 space-y-0.5">
                  <a href="tel:+912352228673" className="hover:underline block">+91-2352-228673, 228516</a>
                  <a href="tel:+919822282331" className="hover:underline block">+91-98222 82331</a>
                  <a href="tel:+919881464859" className="hover:underline block">+91-98814 64859</a>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">PM 75, MIDC, Mirjole, Ratnagiri - 415639, Maharashtra, INDIA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 w-full">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 aasamant. All rights reserved. Plant information sourced from various botanical databases.
              </p>
              <span className="text-primary-foreground/60 text-xs italic mt-2 md:mt-0 block">
                Disclaimer: All information and content on this website, including plant details and images, have been generated or curated with the assistance of artificial intelligence. Please verify critical information independently for professional or scientific use.
              </span>
            </div>
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