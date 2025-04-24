import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Scale } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-navy text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Информационная безопасность и право в современном мире
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Эксперты в области защиты информации и правового регулирования 
              информационных отношений. Защитим ваши данные и права в цифровом пространстве.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-securityBlue hover:bg-securityBlue/90">
                <Link to="/security">Узнать о безопасности</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/law">Правовые консультации</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-securityBlue to-lawPurple rounded-full opacity-20 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-4 bg-gradient-to-br from-securityBlue to-lawPurple rounded-full opacity-30 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center gap-4">
                  <Shield size={80} className="text-securityBlue" />
                  <Scale size={80} className="text-lawPurple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
