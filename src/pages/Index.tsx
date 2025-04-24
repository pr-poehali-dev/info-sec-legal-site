import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Hero />
        
        <FeatureSection />
        
        {/* Почему мы */}
        <section className="bg-lightGray py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Мы предлагаем комплексные решения в области информационной безопасности 
                и информационного права
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="text-securityBlue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Опыт и квалификация</h3>
                      <p className="text-gray-600">
                        Наши специалисты имеют многолетний опыт работы в сфере информационной 
                        безопасности и права, а также необходимые сертификаты и лицензии.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="text-securityBlue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Индивидуальный подход</h3>
                      <p className="text-gray-600">
                        Мы учитываем особенности и потребности каждого клиента, предлагая 
                        оптимальные решения для конкретных задач.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="text-securityBlue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Комплексные решения</h3>
                      <p className="text-gray-600">
                        Мы предлагаем полный спектр услуг по защите информации и правовому 
                        сопровождению в информационной сфере.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="text-securityBlue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Современные технологии</h3>
                      <p className="text-gray-600">
                        Мы используем передовые технологии и методики для обеспечения 
                        максимального уровня защиты информации.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-navy to-securityBlue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы защитить свою информацию?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами сегодня, чтобы получить консультацию экспертов 
              по информационной безопасности и информационному праву
            </p>
            <Button size="lg" className="bg-white text-navy hover:bg-white/90">
              Получить консультацию
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
