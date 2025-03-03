import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

// Sample product data
const productData = [
  {
    id: 1,
    name: "Extracto de Echinacea",
    description: "Fortalece el sistema inmunológico y ayuda a combatir resfriados.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Inmunidad"
  },
  {
    id: 2,
    name: "Omega 3 Natural",
    description: "Aceite de pescado de alta pureza para la salud cardiovascular.",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cardiovascular"
  },
  {
    id: 3,
    name: "Colágeno Hidrolizado",
    description: "Mejora la salud de la piel, articulaciones y cabello.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1550159930-40066082a4fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Belleza"
  },
  {
    id: 4,
    name: "Té Verde Concentrado",
    description: "Potente antioxidante que ayuda a mejorar el metabolismo.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1546890975-8c98f0a7b617?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Antioxidantes"
  },
  {
    id: 5,
    name: "Magnesio Natural",
    description: "Ayuda a la relajación muscular y mejora la calidad del sueño.",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Minerales"
  },
  {
    id: 6,
    name: "Probióticos Avanzados",
    description: "Mejora la salud intestinal y fortalece el sistema inmune.",
    price: 459.99,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Digestivo"
  },
  {
    id: 7,
    name: "Vitamina D3 + K2",
    description: "Combinación sinérgica para la salud ósea y cardiovascular.",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Vitaminas"
  },
  {
    id: 8,
    name: "Ashwagandha Orgánica",
    description: "Adaptógeno que ayuda a reducir el estrés y la ansiedad.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adaptógenos"
  }
];

const Products = () => {
  const [shuffledProducts] = useState(() => {
    // Fisher-Yates shuffle algorithm
    const shuffled = [...productData];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  const handleBuyClick = (product: any) => {
    const message = `Hola, estoy interesado en el producto: ${product.name} (${product.price} MXN). ¿Podrían darme más información?`;
    const whatsappUrl = `https://wa.me/+5215555555555?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Productos</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra selección de productos naturales, elaborados con los más altos estándares de calidad 
            para ofrecerte soluciones efectivas y seguras para tu bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {shuffledProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 h-12 overflow-hidden">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => handleBuyClick(product)}
                    className="flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5 mr-1" />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent hover:bg-green-600 text-green-600 hover:text-white font-bold py-3 px-8 border border-green-600 hover:border-transparent rounded-full transition-colors">
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;