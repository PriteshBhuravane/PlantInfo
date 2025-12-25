import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/gallery?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 transition-smooth hover:scale-105">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" style={{maxHeight: '56px'}} />
          {/* <span className="text-xl font-bold bg-gradient-nature bg-clip-text text-transparent">
            aasamant
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-foreground hover:text-accent transition-smooth font-medium"
          >
            Home
          </Link>
          <Link 
            to="/gallery" 
            className="text-foreground hover:text-accent transition-smooth font-medium"
          >
            Gallery
          </Link>
          <Link 
            to="/images-gallery" 
            className="text-foreground hover:text-accent transition-smooth font-medium"
          >
            Images Gallery
          </Link>
          <Link 
            to="/about" 
            className="text-foreground hover:text-accent transition-smooth font-medium"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-foreground hover:text-accent transition-smooth font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search plants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64 transition-smooth focus:w-72"
            />
          </div>
          <Button type="submit" size="sm" className="bg-gradient-nature hover:opacity-90">
            Search
          </Button>
        </form>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search plants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" size="sm" className="bg-gradient-nature hover:opacity-90">
                Search
              </Button>
            </form>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-foreground hover:text-accent transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/gallery" 
                className="text-foreground hover:text-accent transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/images-gallery" 
                className="text-foreground hover:text-accent transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Images Gallery
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-accent transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-accent transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;