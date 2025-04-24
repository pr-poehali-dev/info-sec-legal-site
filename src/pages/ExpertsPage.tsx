import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  User, 
  GraduationCap, 
  Settings, 
  BookOpen, 
  BriefcaseBusiness,
  Laptop,
  Scale,
  FileText, 
  Building
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ExpertsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Users size={48} className="mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6">Эксперты в сфере информационной безопасности и права</h1>
              <p className="text-xl">
                Кто помогает защищать информацию и обеспечивать правовое регулирование в цифровом пространстве
              </p>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Кто обеспечивает информационную безопасность и правовое регулирование?</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-lg text-gray-700 mb-4">
                  Информационная безопасность и информационное право – это междисциплинарные области, требующие участия 
                  специалистов различного профиля. Эксперты в этих сферах обладают уникальными знаниями и навыками, 
                  которые позволяют им эффективно противостоять информационным угрозам и обеспечивать правовое 
                  регулирование информационных отношений.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Эти профессионалы работают как индивидуально, так и в составе различных организаций – государственных 
                  органов, коммерческих компаний, научных и образовательных учреждений.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Security Experts */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Специалисты по информационной безопасности</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-securityBlue">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Laptop size={24} className="text-securityBlue mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Технические специалисты</h3>
                        <p className="text-gray-700 mb-4">
                          Эксперты, занимающиеся техническими аспектами информационной безопасности:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <User size={16} className="mr-2 mt-1 text-securityBlue" />
                            <div>
                              <span className="font-medium">Специалисты по кибербезопасности</span> - защищают системы от кибератак, 
                              разрабатывают и внедряют защитные меры
                            </div>
                          </li>
                          <li className="flex items-start">
                            <User size={16} className="mr-2 mt-1 text-securityBlue" />
                            <div>
                              <span className="font-medium">Этичные хакеры</span> - выявляют уязвимости систем путем 
                              моделирования атак (penetration testing)
                            </div>
                          </li>
                          <li className="flex items-start">
                            <User size={16} className="mr-2 mt-1 text-securityBlue" />
                            <div>
                              <span className="font-medium">Аналитики безопасности</span> - анализируют угрозы и инциденты, 
                              разрабатывают стратегии защиты
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-securityBlue">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Settings size={24} className="text-securityBlue mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Управленческие специалисты</h3>
                        <p className="text-gray-700 mb-4">
                          Эксперты, отвечающие за управление процессами информационной безопасности:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <User size={16} className="mr-2 mt-1 text-securityBlue" />
                            <div>
                              <span className="font-medium">CISO (Chief Information Security Officer)</span> - руководители, 
                              отвечающие за стратегию безопасности организации
                            </div>
                          </li>
                          <li className="flex items-start">
                            <User size={16} className="mr-2 mt-1 text-securityBlue" />
                            <div>
                              <span className="font-medium">Менеджеры по безопасности</span> - управляют процессами защиты 
                              информации в компании
                            </div>
                          </li>
                          <li className="flex items-start">
                            <User size={16} className="mr-2 mt-1 text-securityBlue" />
                            <div>
                              <span className="font-medium">Аудиторы безопасности</span> - проверяют соответствие систем 
                              требованиям и стандартам
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <div className="flex items-start">
                  <GraduationCap size={24} className="text-securityBlue mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Квалификация и сертификация</h3>
                    <p className="text-gray-700 mb-4">
                      Специалисты по информационной безопасности обычно имеют профильное образование и профессиональные 
                      сертификаты, подтверждающие их квалификацию:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Популярные сертификации</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• CISSP (Certified Information Systems Security Professional)</li>
                          <li>• CEH (Certified Ethical Hacker)</li>
                          <li>• CompTIA Security+</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Образовательные программы</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Информационная безопасность</li>
                          <li>• Кибербезопасность</li>
                          <li>• Компьютерные науки</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Legal Experts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Специалисты в области информационного права</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-lawPurple">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Scale size={24} className="text-lawPurple mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Юридические специалисты</h3>
                        <p className="text-gray-700 mb-4">
                          Эксперты, занимающиеся правовыми аспектами информационных отношений:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <User size={16} className="mr-2 mt-1 text-lawPurple" />
                            <div>
                              <span className="font-medium">Юристы по информационному праву</span> - специализируются на правовом 
                              регулировании информационных отношений
                            </div>
                          </li>
                          <li className="flex items-start">
                            <User size={16} className="mr-2 mt-1 text-lawPurple" />
                            <div>
                              <span className="font-medium">Специалисты по защите данных</span> - обеспечивают соблюдение 
                              законодательства о персональных данных
                            </div>
                          </li>
                          <li className="flex items-start">
                            <User size={16} className="mr-2 mt-1 text-lawPurple" />
                            <div>
                              <span className="font-medium">IT-адвокаты</span> - представляют интересы клиентов в судах 
                              по делам в сфере информационных технологий
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-lawPurple">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Building size={24} className="text-lawPurple mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Организации и регуляторы</h3>
                        <p className="text-gray-700 mb-4">
                          Государственные и международные органы, обеспечивающие регулирование в информационной сфере:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <FileText size={16} className="mr-2 mt-1 text-lawPurple" />
                            <div>
                              <span className="font-medium">Роскомнадзор</span> - федеральная служба по надзору в сфере 
                              связи, информационных технологий и массовых коммуникаций
                            </div>
                          </li>
                          <li className="flex items-start">
                            <FileText size={16} className="mr-2 mt-1 text-lawPurple" />
                            <div>
                              <span className="font-medium">ФСТЭК России</span> - федеральная служба по техническому 
                              и экспортному контролю
                            </div>
                          </li>
                          <li className="flex items-start">
                            <FileText size={16} className="mr-2 mt-1 text-lawPurple" />
                            <div>
                              <span className="font-medium">Международные организации</span> - ICANN, WIPO, ITU и другие
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <BriefcaseBusiness size={24} className="text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Взаимодействие специалистов</h3>
                    <p className="text-gray-700 mb-4">
                      Эффективная защита информации и правовое регулирование информационной сферы требуют 
                      тесного взаимодействия технических и юридических специалистов. Только комплексный подход 
                      позволяет обеспечить баланс между технологическими, организационными и правовыми аспектами 
                      информационной безопасности.
                    </p>
                    <div className="bg-green-50 p-4 rounded border-l-4 border-green-600">
                      <p className="text-gray-700">
                        <strong>Важно:</strong> В современных условиях нарастания информационных угроз и усложнения 
                        правового регулирования информационной сферы роль экспертов постоянно возрастает. От их 
                        профессионализма зависит не только безопасность отдельных организаций, но и стабильность 
                        функционирования информационного общества в целом.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExpertsPage;
