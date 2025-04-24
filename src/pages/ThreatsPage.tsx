import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertTriangle, 
  ShieldOff, 
  FileWarning, 
  Network, 
  Eye, 
  Laptop, 
  Users, 
  Lock,
  UserX,
  BriefcaseBusiness
} from "lucide-react";

const ThreatsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-red-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <AlertTriangle size={48} className="mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6">Угрозы информационной безопасности</h1>
              <p className="text-xl">
                Основные типы угроз, техники атак и методы защиты от них в современном информационном пространстве
              </p>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Современные киберугрозы</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-lg text-gray-700 mb-4">
                  В цифровую эпоху информационные угрозы становятся всё более изощренными и опасными. Они могут нанести 
                  значительный ущерб отдельным пользователям, организациям и даже целым государствам.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Понимание современных угроз информационной безопасности является ключевым элементом для построения 
                  эффективной защиты и минимизации рисков.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <ShieldOff size={20} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Увеличение масштаба угроз</h3>
                      <p className="text-sm text-gray-600">
                        Количество кибератак растет ежегодно на 15-20%, а их сложность повышается
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <FileWarning size={20} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Рост ущерба</h3>
                      <p className="text-sm text-gray-600">
                        Глобальный ущерб от киберпреступлений исчисляется триллионами долларов ежегодно
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Types of Threats */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Основные типы угроз</h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Laptop size={24} className="text-red-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Вредоносное программное обеспечение</h3>
                        <p className="text-gray-700 mb-3">
                          Различные типы программ, созданных с целью нанесения вреда информационным системам, 
                          похищения данных или получения несанкционированного доступа.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">Вирусы</h4>
                            <p className="text-xs text-gray-600">
                              Саморазмножающиеся программы, внедряющиеся в другие файлы
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">Троянские программы</h4>
                            <p className="text-xs text-gray-600">
                              Вредоносные программы, маскирующиеся под легитимное ПО
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">Программы-вымогатели</h4>
                            <p className="text-xs text-gray-600">
                              Шифруют данные и требуют выкуп за их расшифровку
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Users size={24} className="text-red-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Социальная инженерия</h3>
                        <p className="text-gray-700 mb-3">
                          Методы психологического манипулирования людьми с целью получения конфиденциальной 
                          информации или побуждения к определенным действиям.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">Фишинг</h4>
                            <p className="text-xs text-gray-600">
                              Подделка сайтов и писем для кражи учетных данных
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">Претекстинг</h4>
                            <p className="text-xs text-gray-600">
                              Выдача себя за другое лицо для получения информации
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">Вишинг</h4>
                            <p className="text-xs text-gray-600">
                              Телефонное мошенничество с целью получения данных
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Network size={24} className="text-red-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Сетевые атаки</h3>
                        <p className="text-gray-700 mb-3">
                          Атаки, направленные на сетевую инфраструктуру с целью нарушения ее работы, перехвата данных 
                          или получения несанкционированного доступа.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">DDoS-атаки</h4>
                            <p className="text-xs text-gray-600">
                              Нарушение работы сайта путем множественных запросов
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">Man-in-the-Middle</h4>
                            <p className="text-xs text-gray-600">
                              Перехват данных между двумя устройствами
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">Снифинг пакетов</h4>
                            <p className="text-xs text-gray-600">
                              Анализ сетевого трафика для получения данных
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Eye size={24} className="text-red-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Кибершпионаж</h3>
                        <p className="text-gray-700 mb-3">
                          Получение несанкционированного доступа к конфиденциальной информации с целью политического, 
                          экономического или военного преимущества.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">APT-атаки</h4>
                            <p className="text-xs text-gray-600">
                              Целенаправленные долгосрочные атаки на конкретные организации
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">Промышленный шпионаж</h4>
                            <p className="text-xs text-gray-600">
                              Кража коммерческой тайны и интеллектуальной собственности
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h4 className="font-medium text-sm mb-1">Цифровая разведка</h4>
                            <p className="text-xs text-gray-600">
                              Сбор информации через публичные и закрытые источники
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Protection Measures */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Ключевые меры защиты</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-b from-white to-gray-50">
                  <CardContent className="p-5">
                    <div className="flex flex-col items-center text-center">
                      <Lock className="text-securityBlue mb-4" size={32} />
                      <h3 className="font-semibold mb-3">Технические меры</h3>
                      <ul className="space-y-2 text-gray-700 text-sm text-left">
                        <li>• Антивирусное программное обеспечение</li>
                        <li>• Межсетевые экраны</li>
                        <li>• Шифрование данных</li>
                        <li>• Системы обнаружения и предотвращения вторжений</li>
                        <li>• Многофакторная аутентификация</li>
                        <li>• Регулярное обновление ПО</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-b from-white to-gray-50">
                  <CardContent className="p-5">
                    <div className="flex flex-col items-center text-center">
                      <Users className="text-securityBlue mb-4" size={32} />
                      <h3 className="font-semibold mb-3">Организационные меры</h3>
                      <ul className="space-y-2 text-gray-700 text-sm text-left">
                        <li>• Политики и процедуры безопасности</li>
                        <li>• Обучение и повышение осведомленности сотрудников</li>
                        <li>• Управление доступом</li>
                        <li>• Аудит безопасности</li>
                        <li>• Управление инцидентами</li>
                        <li>• Резервное копирование данных</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-b from-white to-gray-50">
                  <CardContent className="p-5">
                    <div className="flex flex-col items-center text-center">
                      <BriefcaseBusiness className="text-securityBlue mb-4" size={32} />
                      <h3 className="font-semibold mb-3">Правовые меры</h3>
                      <ul className="space-y-2 text-gray-700 text-sm text-left">
                        <li>• Соблюдение законодательства о защите информации</li>
                        <li>• Юридическая защита интеллектуальной собственности</li>
                        <li>• Соглашения о конфиденциальности</li>
                        <li>• Страхование киберрисков</li>
                        <li>• Взаимодействие с правоохранительными органами</li>
                        <li>• Судебное преследование нарушителей</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start">
                  <UserX size={24} className="text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Человеческий фактор</h3>
                    <p className="text-gray-700">
                      Важно помнить, что человеческий фактор остается одним из самых слабых звеньев в системе информационной 
                      безопасности. По статистике, более 80% инцидентов связаны с ошибками или преднамеренными действиями 
                      сотрудников. Поэтому регулярное обучение персонала, повышение осведомленности о киберугрозах и 
                      формирование культуры безопасности являются критически важными элементами защиты.
                    </p>
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

export default ThreatsPage;
