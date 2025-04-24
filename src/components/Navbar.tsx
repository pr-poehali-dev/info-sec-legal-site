import { Link } from "react-router-dom";
import { Shield, Scale, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield size={24} className="text-securityBlue" />
            <span className="font-bold text-lg">ИнфоБезПраво</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-securityBlue transition-colors">
              Главная
            </Link>
            <Link to="/security" className="text-gray-700 hover:text-securityBlue transition-colors">
              Информационная безопасность
            </Link>
            <Link to="/law" className="text-gray-700 hover:text-lawPurple transition-colors">
              Информационное право
            </Link>
            <Link to="/threats" className="text-gray-700 hover:text-red-500 transition-colors">
              Угрозы
            </Link>
            <Link to="/experts" className="text-gray-700 hover:text-green-600 transition-colors">
              Эксперты
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-securityBlue transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Главная
              </Link>
              <Link 
                to="/security" 
                className="text-gray-700 hover:text-securityBlue transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Информационная безопасность
              </Link>
              <Link 
                to="/law" 
                className="text-gray-700 hover:text-lawPurple transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Информационное право
              </Link>
              <Link 
                to="/threats" 
                className="text-gray-700 hover:text-red-500 transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Угрозы
              </Link>
              <Link 
                to="/experts" 
                className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Эксперты
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
