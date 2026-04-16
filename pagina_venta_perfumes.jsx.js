import { useState } from 'react';

// Proyecto preparado para GitHub Pages
// Recomendado: usar con Vite/React y base configurada para el repo.

export default function PaginaVentaPerfumes() {
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const agregarAlCarrito = (perfume) => {
    setCarrito([...carrito, perfume]);
  };

  const total = carrito.reduce((acc, item) => acc + parseFloat(item.precio.replace('$', '')), 0);

  const eliminarDelCarrito = (indexEliminar) => {
    setCarrito(carrito.filter((_, index) => index !== indexEliminar));
  };
  const perfumes = [
    { nombre: 'Elegance Noir', precio: '$89.90', imagen: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80' },
    { nombre: 'Rose Divine', precio: '$74.90', imagen: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80' },
    { nombre: 'Ocean Mist', precio: '$69.90', imagen: 'https://images.unsplash.com/photo-1615634262417-1f2dc2b927c4?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="bg-gradient-to-r from-black via-zinc-900 to-amber-900 py-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-amber-300">OMBU</h1>
        <p className="mt-4 text-xl italic text-zinc-200">Lujo y elegancia en cada gota</p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-amber-400 text-black px-8 py-3 rounded-2xl font-semibold hover:bg-amber-300 transition">
            Comprar Ahora
          </button>
          <button onClick={() => setCarritoAbierto(!carritoAbierto)} className="bg-white/10 border border-white/20 px-8 py-3 rounded-2xl font-semibold hover:bg-white/20 transition">
            🛒 Ver Carrito ({carrito.length})
          </button>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Los Más Vendidos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {perfumes.map((perfume) => (
            <div key={perfume.nombre} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform">
              <img src={perfume.imagen} alt={perfume.nombre} className="w-full h-72 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold">{perfume.nombre}</h3>
                <p className="text-amber-300 text-xl mt-2">{perfume.precio}</p>
                <button onClick={() => agregarAlCarrito(perfume)} className="mt-4 w-full bg-amber-400 text-black py-2 rounded-xl font-semibold hover:bg-amber-300">
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-xl font-bold text-amber-300">Envío Rápido</h4>
            <p className="text-zinc-400 mt-2">Entrega segura a todo el país</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-amber-300">100% Original</h4>
            <p className="text-zinc-400 mt-2">Perfumes auténticos garantizados</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-amber-300">Soporte 24/7</h4>
            <p className="text-zinc-400 mt-2">Atención personalizada</p>
          </div>
        </div>
      </section>

      {carritoAbierto && (
      <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-zinc-950 border-l border-zinc-800 shadow-2xl z-50 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">🛒 Tu Carrito</h2>
          <button onClick={() => setCarritoAbierto(false)} className="text-zinc-400 hover:text-white text-xl">✕</button>
        </div>

      <section className="bg-black border-t border-zinc-800 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">🛒 Carrito de Compras</h2>
          {carrito.length === 0 ? (
            <p className="text-zinc-400">Tu carrito está vacío.</p>
          ) : (
            <div>
              {carrito.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-zinc-800 gap-4">
                  <span>{item.nombre}</span>
                  <div className="flex items-center gap-4">
                    <span>{item.precio}</span>
                    <button onClick={() => eliminarDelCarrito(index)} className="text-red-400 hover:text-red-300 font-bold">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 text-xl font-bold text-amber-300">
                Total: ${total.toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </section>
      </div>
      )}
    </div>
  );
}
