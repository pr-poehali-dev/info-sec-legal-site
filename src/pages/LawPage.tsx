import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Scale, 
  FileText, 
  BookOpen, 
  Shield, 
  Globe, 
  ScrollText,
  User
} from "lucide-react";

const LawPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-lawPurple text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Scale size={48} className="mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6">Информационное право</h1>
              <p className="text-xl">
                Правовое регулирование отношений в сфере информации, информационных технологий и защиты информации
              </p>
            </div>
          </div>
        </section>
        
        {/* What is Information Law */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Что такое информационное право?</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-lg text-gray-700 mb-4">
                  Информационное право – это относительно молодая комплексная отрасль права, регулирующая общественные 
                  отношения, связанные с созданием, хранением, обработкой, распространением, использованием и защитой 
                  информации, а также с функционированием информационной инфраструктуры.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Оно находится на стыке различных отраслей права и охватывает широкий спектр правоотношений в 
                  информационной сфере.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center text-lawPurple">
                      <FileText size={20} className="mr-2" />
                      Предмет регулирования
                    </h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Информация как объект правоотношений</li>
                      <li>• Права на доступ к информации</li>
                      <li>• Информационные системы и технологии</li>
                      <li>• Интеллектуальная собственность в цифровой среде</li>
                      <li>• Информационная безопасность</li>
                      <li>• Персональные данные</li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center text-lawPurple">
                      <BookOpen size={20} className="mr-2" />
                      Принципы информационного права
                    </h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Свобода информации</li>
                      <li>• Достоверность информации</li>
                      <li>• Защита частной жизни</li>
                      <li>• Баланс интересов личности, общества и государства</li>
                      <li>• Приоритет прав человека</li>
                      <li>• Равенство прав участников информационных отношений</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Legal Framework */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Правовая база информационного права</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <p className="text-lg text-gray-700 mb-6">
                  Информационное право базируется на системе нормативных правовых актов, регулирующих различные 
                  аспекты информационных отношений. Правовые нормы могут содержаться в документах различных уровней:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-t-4 border-lawPurple">
                    <CardContent className="p-5">
                      <h3 className="font-semibold mb-3">Международные акты</h3>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Всеобщая декларация прав человека</li>
                        <li>• Международный пакт о гражданских и политических правах</li>
                        <li>• Конвенция о киберпреступности</li>
                        <li>• Договоры ВОИС по авторскому праву</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-t-4 border-lawPurple">
                    <CardContent className="p-5">
                      <h3 className="font-semibold mb-3">Конституционные положения</h3>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Право на информацию и свободу информации</li>
                        <li>• Неприкосновенность частной жизни</li>
                        <li>• Свобода массовой информации</li>
                        <li>• Запрет цензуры</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-t-4 border-lawPurple">
                    <CardContent className="p-5">
                      <h3 className="font-semibold mb-3">Федеральные законы</h3>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• "Об информации, информационных технологиях и о защите информации"</li>
                        <li>• "О персональных данных"</li>
                        <li>• "О связи"</li>
                        <li>• "О средствах массовой информации"</li>
                        <li>• "Об электронной подписи"</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-t-4 border-lawPurple">
                    <CardContent className="p-5">
                      <h3 className="font-semibold mb-3">Подзаконные акты</h3>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Указы Президента</li>
                        <li>• Постановления Правительства</li>
                        <li>• Приказы министерств и ведомств</li>
                        <li>• Нормативные акты регуляторов (Роскомнадзор)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Ключевые области информационного права</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <User size={24} className="text-lawPurple mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Защита персональных данных</h3>
                        <p className="text-gray-700 mb-3">
                          Правовое регулирование обработки персональных данных граждан, обеспечивающее их конфиденциальность 
                          и защиту от неправомерного использования.
                        </p>
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-sm text-gray-600">
                            <strong>Ключевые нормы:</strong> Закон "О персональных данных", GDPR (в ЕС), 
                            требования к операторам персональных данных, права субъектов данных, трансграничная передача данных.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Shield size={24} className="text-lawPurple mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Информационная безопасность</h3>
                        <p className="text-gray-700 mb-3">
                          Правовые механизмы обеспечения защиты информации, информационных систем и критической 
                          информационной инфраструктуры.
                        </p>
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-sm text-gray-600">
                            <strong>Ключевые нормы:</strong> Законы "О безопасности критической информационной инфраструктуры", 
                            "О государственной тайне", требования к защите информации, ответственность за кибератаки.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Globe size={24} className="text-lawPurple mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Правовое регулирование интернета</h3>
                        <p className="text-gray-700 mb-3">
                          Правовые вопросы функционирования интернета, регулирование деятельности интернет-провайдеров, 
                          социальных сетей и других онлайн-платформ.
                        </p>
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-sm text-gray-600">
                            <strong>Ключевые нормы:</strong> Закон "О суверенном интернете", правила блокировки запрещенной 
                            информации, ответственность информационных посредников, регулирование социальных сетей.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <ScrollText size={24} className="text-lawPurple mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Электронный документооборот</h3>
                        <p className="text-gray-700 mb-3">
                          Правовые аспекты использования электронных документов, электронных подписей и электронных 
                          сделок в гражданском обороте.
                        </p>
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-sm text-gray-600">
                            <strong>Ключевые нормы:</strong> Закон "Об электронной подписи", положения Гражданского кодекса 
                            о форме сделок, правила хранения электронных документов, юридическая сила электронных доказательств.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LawPage;
