import React from 'react';

const Blog = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Blog</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre los últimos artículos sobre salud y bienestar natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Blog post" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="text-green-600 text-sm font-semibold">Mayo 15, 2025</span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">Beneficios de los suplementos naturales</h3>
              <p className="text-gray-600 mb-4">Descubre cómo los suplementos naturales pueden mejorar tu salud y bienestar general...</p>
              <a href="/blog" className="text-green-600 font-medium hover:text-green-700">Leer más →</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Blog post" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="text-green-600 text-sm font-semibold">Abril 28, 2025</span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">Cómo mejorar tu sistema inmune</h3>
              <p className="text-gray-600 mb-4">Consejos prácticos y naturales para fortalecer tus defensas y mantener tu salud...</p>
              <a href="/blog" className="text-green-600 font-medium hover:text-green-700">Leer más →</a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/blog" 
            className="inline-block bg-transparent hover:bg-green-600 text-green-600 hover:text-white font-bold py-3 px-8 border border-green-600 hover:border-transparent rounded-full transition-colors"
          >
            Ver Más Artículos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;