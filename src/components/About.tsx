import React from 'react';
import { Award, Heart, Leaf, ThumbsUp, Shield } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-12 w-12 text-green-600" />,
    title: "100% Natural",
    description: "Productos elaborados con ingredientes naturales de la más alta calidad."
  },
  {
    icon: <Award className="h-12 w-12 text-green-600" />,
    title: "Experiencia",
    description: "Más de tres décadas brindando soluciones naturales."
  },
  {
    icon: <ThumbsUp className="h-12 w-12 text-green-600" />,
    title: "Garantía",
    description: "Eficacia demostrada a través de años de investigación."
  },
  {
    icon: <Heart className="h-12 w-12 text-green-600" />,
    title: "Compromiso",
    description: "Dedicados a mejorar tu bienestar de forma natural."
  },
  {
    icon: <Shield className="h-12 w-12 text-green-600" />,
    title: "Calidad",
    description: "Certificaciones y estándares internacionales."
  }
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Pronamed</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Con más de 30 años en el mercado, Pronamed se ha consolidado como líder en productos farmacéuticos naturales, 
            ofreciendo soluciones efectivas y seguras para mejorar la calidad de vida de nuestros clientes.
          </p>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">Nuestras Fortalezas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 hover:shadow-xl transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About