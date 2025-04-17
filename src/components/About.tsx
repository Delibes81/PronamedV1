import React from 'react';
import { Award, Heart, Leaf, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-10 w-10 text-green-600" />,
    title: "100% Natural",
    description: "Todos nuestros productos están elaborados con ingredientes naturales de la más alta calidad."
  },
  {
    icon: <Award className="h-10 w-10 text-green-600" />,
    title: "30+ Años de Experiencia",
    description: "Más de tres décadas brindando soluciones naturales para mejorar la calidad de vida."
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-green-600" />,
    title: "Resultados Garantizados",
    description: "Nuestros productos han demostrado su eficacia a través de años de investigación y testimonios."
  },
  {
    icon: <Heart className="h-10 w-10 text-green-600" />,
    title: "Compromiso con tu Salud",
    description: "Nos dedicamos a crear productos que realmente mejoren tu bienestar de forma natural."
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Laboratorio Pronamed" 
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Historia</h3>
            <p className="text-gray-600 mb-4">
              Fundada en 1990, Pronamed nació con la misión de ofrecer alternativas naturales a los medicamentos convencionales. 
              Desde entonces, hemos crecido hasta convertirnos en referentes en la industria farmacéutica naturista.
            </p>
            <p className="text-gray-600 mb-4">
              Nuestro compromiso con la investigación y el desarrollo nos ha permitido crear fórmulas innovadoras 
              que combinan lo mejor de la naturaleza con la ciencia moderna, garantizando productos de alta calidad y eficacia.
            </p>
            <p className="text-gray-600">
              Hoy, con presencia en múltiples países, seguimos fieles a nuestra filosofía: promover la salud y el bienestar 
              a través de soluciones naturales, accesibles y efectivas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;