import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Beneficios de los suplementos naturales",
    excerpt: "Descubre cómo los suplementos naturales pueden mejorar tu salud y bienestar general. Aprende sobre los diferentes tipos de suplementos y sus beneficios específicos.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    date: "Mayo 15, 2025",
    category: "Suplementos"
  },
  {
    id: 2,
    title: "Cómo mejorar tu sistema inmune",
    excerpt: "Consejos prácticos y naturales para fortalecer tus defensas y mantener tu salud en óptimas condiciones durante todo el año.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71",
    date: "Abril 28, 2025",
    category: "Salud"
  },
  {
    id: 3,
    title: "La importancia de los antioxidantes",
    excerpt: "Los antioxidantes son fundamentales para combatir los radicales libres y mantener una buena salud. Conoce las mejores fuentes naturales.",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6",
    date: "Abril 15, 2025",
    category: "Nutrición"
  },
  {
    id: 4,
    title: "Hierbas medicinales para el estrés",
    excerpt: "Descubre las hierbas medicinales más efectivas para combatir el estrés y la ansiedad de manera natural y segura.",
    image: "https://images.unsplash.com/photo-1487631608502-3f31c6d78597",
    date: "Abril 1, 2025",
    category: "Bienestar"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-2xl font-bold text-gray-800">Pronamed</span>
            </Link>
            <Link to="/" className="flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Blog de Salud y Bienestar</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encuentra los mejores consejos y artículos sobre salud natural, bienestar y vida saludable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={`${post.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-green-600 text-sm font-semibold">{post.date}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-green-600 font-medium hover:text-green-700">
                  Leer más →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Cargar más artículos
          </button>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;