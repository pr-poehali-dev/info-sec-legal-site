import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Scale, 
  AlertTriangle, 
  Users, 
  ChevronRight 
} from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Информационная безопасность и право</h1>
              <p className="text-xl mb-8">
                Узнайте о защите информации, правовом регулировании и современных угрозах в информационном пространстве
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-securityBlue hover:bg-securityBlue/90">
                  <Link to="/security">Изучить информационную безопасность</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="/law">Узнать об информационном праве</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Intro Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Что такое информационная безопасность и информационное право?</h2>
              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-securityBlue">
                  <div className="flex items-center mb-4">
                    <Shield className="text-securityBlue mr-3" size={28} />
                    <h3 className="text-xl font-semibold">Информационная безопасность</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Информационная безопасность - это практика защиты информации и информационных систем от несанкционированного доступа, 
                    использования, раскрытия, нарушения, модификации или уничтожения.
                  </p>
                  <p className="text-gray-700">
                    Она включает в себя комплекс технических, организационных и правовых мер, 
                    направленных на обеспечение конфиденциальности, целостности и доступности информации.
                  </p>
                  <div className="mt-4">
                    <Link to="/security" className="inline-flex items-center text-securityBlue hover:underline">
                      Подробнее <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-lawPurple">
                  <div className="flex items-center mb-4">
                    <Scale className="text-lawPurple mr-3" size={28} />
                    <h3 className="text-xl font-semibold">Информационное право</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Информационное право - это отрасль права, регулирующая общественные отношения,
                    связанные с созданием, хранением, обработкой, распространением, использованием и защитой информации.
                  </p>
                  <p className="text-gray-700">
                    Оно устанавливает правовые режимы информации, определяет права и обязанности субъектов 
                    информационных отношений, а также ответственность за нарушения в этой сфере.
                  </p>
                  <div className="mt-4">
                    <Link to="/law" className="inline-flex items-center text-lawPurple hover:underline">
                      Подробнее <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why it matters */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Почему это важно?</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <p className="text-lg text-gray-700 mb-4">
                  В современном информационном обществе объемы данных и информации постоянно растут.
                  Информация стала одним из наиболее ценных активов для граждан, организаций и государств.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Защита этой информации от различных угроз и правовое регулирование отношений в информационной
                  сфере становятся критически важными задачами для обеспечения безопасности и устойчивого развития.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <Card>
                    <CardContent className="p-5 text-center">
                      <AlertTriangle className="mx-auto mb-3 text-amber-500" size={28} />
                      <h3 className="font-semibold mb-2">Угрозы растут</h3>
                      <p className="text-sm text-gray-600">
                        Киберпреступность и угрозы информационной безопасности становятся всё более изощренными
                      </p>
                      <Link to="/threats" className="inline-flex items-center text-amber-500 text-sm mt-3 hover:underline">
                        Изучить угрозы <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-5 text-center">
                      <Shield className="mx-auto mb-3 text-securityBlue" size={28} />
                      <h3 className="font-semibold mb-2">Защита необходима</h3>
                      <p className="text-sm text-gray-600">
                        Комплексные меры безопасности стали неотъемлемой частью любой деятельности
                      </p>
                      <Link to="/security" className="inline-flex items-center text-securityBlue text-sm mt-3 hover:underline">
                        О защите <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-5 text-center">
                      <Users className="mx-auto mb-3 text-green-600" size={28} />
                      <h3 className="font-semibold mb-2">Профессионалы помогают</h3>
                      <p className="text-sm text-gray-600">
                        Специалисты по кибербезопасности и юристы обеспечивают защиту интересов
                      </p>
                      <Link to="/experts" className="inline-flex items-center text-green-600 text-sm mt-3 hover:underline">
                        Об экспертах <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Изучите подробнее</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Получите полезную информацию об информационной безопасности и праве
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-securityBlue hover:bg-securityBlue/90">
                <Link to="/security">Информационная безопасность</Link>
              </Button>
              <Button size="lg" className="bg-lawPurple hover:bg-lawPurple/90">
                <Link to="/law">Информационное право</Link>
              </Button>
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                <Link to="/threats">Актуальные угрозы</Link>
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Link to="/experts">Эксперты отрасли</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
