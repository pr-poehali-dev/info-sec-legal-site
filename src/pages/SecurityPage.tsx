import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Server, 
  User, 
  Building, 
  Globe, 
  CheckCircle2,
  AlertTriangle, 
  BookOpen
} from "lucide-react";

const SecurityPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-securityBlue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Shield size={48} className="mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6">Информационная безопасность</h1>
              <p className="text-xl">
                Защита информации и информационных систем от различных угроз в цифровую эпоху
              </p>
            </div>
          </div>
        </section>
        
        {/* What is Information Security */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Что такое информационная безопасность?</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-lg text-gray-700 mb-4">
                  Информационная безопасность (ИБ) – это комплекс мер, направленных на обеспечение защищенности 
                  информации от несанкционированного доступа, использования, раскрытия, искажения, изменения, 
                  исследования, записи или уничтожения.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Основные принципы информационной безопасности базируются на триаде CIA:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <Card>
                    <CardContent className="p-5">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Lock size={20} className="text-securityBlue mr-2" />
                        Конфиденциальность
                      </h3>
                      <p className="text-sm text-gray-600">
                        Обеспечение доступа к информации только авторизованным пользователям и защита от несанкционированного доступа
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-5">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <CheckCircle2 size={20} className="text-securityBlue mr-2" />
                        Целостность
                      </h3>
                      <p className="text-sm text-gray-600">
                        Обеспечение точности и полноты информации и методов ее обработки, защита от несанкционированных изменений
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-5">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Server size={20} className="text-securityBlue mr-2" />
                        Доступность
                      </h3>
                      <p className="text-sm text-gray-600">
                        Обеспечение доступа к информации и связанным активам авторизованным пользователям по мере необходимости
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why is it important */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Зачем нужна информационная безопасность?</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 mb-6">
                  В современном мире, где информация является одним из наиболее ценных ресурсов, её защита стала 
                  критически важной задачей по следующим причинам:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Рост киберугроз</h3>
                      <p className="text-gray-600">
                        Постоянно увеличивающееся количество и сложность кибератак требуют адекватных мер защиты
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <User size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Защита персональных данных</h3>
                      <p className="text-gray-600">
                        Необходимость обеспечения конфиденциальности и защиты персональных данных граждан
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Building size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Защита бизнеса</h3>
                      <p className="text-gray-600">
                        Защита коммерческой тайны, интеллектуальной собственности и репутации компаний
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Национальная безопасность</h3>
                      <p className="text-gray-600">
                        Защита критической информационной инфраструктуры и государственных информационных систем
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-securityBlue">
                  <p className="text-gray-700">
                    <strong>Важно понимать:</strong> Информационная безопасность – это непрерывный процесс, 
                    а не однократное мероприятие. Она требует постоянного внимания, обновления защитных мер 
                    и адаптации к новым угрозам.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Elements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Ключевые элементы информационной безопасности</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-securityBlue">
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <BookOpen size={20} className="text-securityBlue mr-2" />
                      Организационные меры
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Политики и процедуры безопасности</li>
                      <li>• Управление доступом к информации</li>
                      <li>• Классификация информации</li>
                      <li>• Обучение сотрудников</li>
                      <li>• Реагирование на инциденты</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-securityBlue">
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Lock size={20} className="text-securityBlue mr-2" />
                      Технические меры
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Аутентификация и авторизация</li>
                      <li>• Шифрование данных</li>
                      <li>• Межсетевые экраны и антивирусы</li>
                      <li>• Системы обнаружения вторжений</li>
                      <li>• Резервное копирование данных</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-securityBlue md:col-span-2">
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Shield size={20} className="text-securityBlue mr-2" />
                      Подходы к обеспечению безопасности
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <h4 className="font-medium mb-1">Превентивные меры</h4>
                        <p className="text-sm text-gray-600">
                          Меры, предотвращающие нарушения безопасности до их возникновения
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Детективные меры</h4>
                        <p className="text-sm text-gray-600">
                          Обнаружение нарушений безопасности в случае их возникновения
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Корректирующие меры</h4>
                        <p className="text-sm text-gray-600">
                          Исправление или уменьшение воздействия нарушения безопасности
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Стандарты и лучшие практики</h3>
                <p className="text-gray-700 mb-4">
                  При построении системы информационной безопасности организации часто опираются на международные 
                  и национальные стандарты, такие как:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• ISO/IEC 27001 - Международный стандарт по информационной безопасности</li>
                  <li>• NIST Cybersecurity Framework - Американский стандарт кибербезопасности</li>
                  <li>• PCI DSS - Стандарт безопасности данных индустрии платежных карт</li>
                  <li>• ГОСТ Р ИСО/МЭК 27001 - Российский аналог ISO 27001</li>
                  <li>• Приказы ФСТЭК России по защите информации</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;
