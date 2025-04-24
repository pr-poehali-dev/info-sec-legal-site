import { Shield, FileText, Server, Lock, Scale, UserCheck } from "lucide-react";
import InfoCard from "@/components/InfoCard";

const FeatureSection = () => {
  const securityFeatures = [
    {
      icon: <Shield size={24} className="text-securityBlue" />,
      title: "Защита данных",
      description: "Современные методы и технологии защиты персональных и корпоративных данных от утечек и несанкционированного доступа."
    },
    {
      icon: <Lock size={24} className="text-securityBlue" />,
      title: "Кибербезопасность",
      description: "Защита от кибератак, вредоносного ПО и других угроз цифровой безопасности организаций и частных лиц."
    },
    {
      icon: <Server size={24} className="text-securityBlue" />,
      title: "ИТ-инфраструктура",
      description: "Проектирование и внедрение защищенной ИТ-инфраструктуры с учетом современных стандартов безопасности."
    }
  ];

  const lawFeatures = [
    {
      icon: <Scale size={24} className="text-lawPurple" />,
      title: "Информационное право",
      description: "Юридическая поддержка в сфере информационных правоотношений, защита интеллектуальной собственности."
    },
    {
      icon: <FileText size={24} className="text-lawPurple" />,
      title: "Соответствие требованиям",
      description: "Помощь в соблюдении требований законодательства в области персональных данных и информационной безопасности."
    },
    {
      icon: <UserCheck size={24} className="text-lawPurple" />,
      title: "Правовая экспертиза",
      description: "Анализ документов и процессов на соответствие законодательству о защите информации и персональных данных."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Комплексный подход к информационной безопасности и информационному праву
        </p>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          <span className="border-b-2 border-securityBlue pb-1">Информационная безопасность</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <InfoCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="border-t-4 border-t-securityBlue"
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-8 text-center">
          <span className="border-b-2 border-lawPurple pb-1">Информационное право</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lawFeatures.map((feature, index) => (
            <InfoCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="border-t-4 border-t-lawPurple"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
