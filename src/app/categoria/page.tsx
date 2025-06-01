import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Gorras',
    image: '/images/gorras.jpg', // Asegúrate de tener estas imágenes en public/images
    href: '/categoria/gorras',
  },
  {
    name: 'Pantalones',
    image: '/images/pantalones.jpg',
    href: '/categoria/pantalones',
  },
  {
    name: 'Poleras',
    image: '/images/poleras.jpg',
    href: '/categoria/poleras',
  },
  {
    name: 'polos',
    image: '/images/polos.jpg',
    href: '/categoria/polos',
  },
];

function PageCategoria() {
  return (
    <div className='dark:bg-gray-900'>
      <div className="min-h-screen container mx-auto  py-10 px-6 ">
        <h1 className="text-3xl font-bold text-center mb-8">Categorías</h1>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href}>
              <div className="dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden">
                <Image
                  width={300}
                  height={200}
                  src={cat.image}
                  alt={cat.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{cat.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageCategoria;
