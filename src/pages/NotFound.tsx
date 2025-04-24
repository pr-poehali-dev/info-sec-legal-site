import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <Shield size={64} className="text-securityBlue mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Страница не найдена</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Извините, запрашиваемая страница не существует или была перемещена.
          </p>
          <Button size="lg" className="bg-securityBlue hover:bg-securityBlue/90">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
