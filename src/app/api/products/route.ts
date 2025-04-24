import { NextResponse } from 'next/server';

// Interfaz para los productos (puedes moverla a un archivo compartido si prefieres)
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
}

// Simulación de datos (en producción usarías una base de datos)
const products: Record<string, Product[]> = {
  polos: [
    { id: 1, name: 'Polo Clásico', price: 29.99, image: '/polos/polos1.jpg', colors: ['Negro', 'Blanco'] },
    { id: 2, name: 'Polo Deportivo', price: 34.99, image: '/polos/polos2.jpg', colors: ['Azul', 'Rojo'] },
    { id: 3, name: 'Polo Deportivo', price: 34.99, image: '/polos/polos3.jpg', colors: ['Azul', 'Rojo'] },
    { id: 4, name: 'Polo Deportivo', price: 34.99, image: '/polos/polos4.jpg', colors: ['Azul', 'Rojo'] },
    { id: 5, name: 'Polo Deportivo', price: 34.99, image: '/polos/polos5.jpg', colors: ['Azul', 'Rojo'] },
  ],
  gorras: [
    { id: 3, name: 'Gorra Snapback', price: 19.99, image: '/gorros/gorras1.jpg', colors: ['Negro'] },
    { id: 4, name: 'Gorra Trucker', price: 24.99, image: '/gorros/gorras2.jpg', colors: ['Azul', 'Verde'] },
    { id: 5, name: 'Gorra Trucker', price: 24.99, image: '/gorros/gorras3.jpg', colors: ['Azul', 'Verde'] },
  ],
  poleras: [
    { id: 5, name: 'Polera Básica', price: 39.99, image: '/poleras/polera1.jpg', colors: ['Blanco', 'Gris'] },
    { id: 6, name: 'Polera Básica', price: 39.99, image: '/poleras/polera2.jpg', colors: ['Blanco', 'Gris'] },
    { id: 7, name: 'Polera Básica', price: 39.99, image: '/poleras/polera3.jpg', colors: ['Blanco', 'Gris'] },
  ],
  pantalones: [
    { id: 8, name: 'Pantalón Casual', price: 59.99, image: '/pantalones/pantalones1.jpg', colors: ['Negro', 'Azul'] },
    { id: 9, name: 'Pantalón Casual', price: 59.99, image: '/pantalones/pantalones2.jpg', colors: ['Negro', 'Azul'] },
    { id: 10, name: 'Pantalón Casual', price: 59.99, image: '/pantalones/pantalones3.jpg', colors: ['Negro', 'Azul'] },
  ],
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  // Validación: Si no se proporciona categoría
  if (!category) {
    return NextResponse.json({ error: 'Categoría no proporcionada' }, { status: 400 });
  }

  // Validación: Si la categoría no existe
  if (!products[category]) {
    return NextResponse.json({ error: 'Categoría no encontrada' }, { status: 404 });
  }

  // Respuesta exitosa
  return NextResponse.json(products[category], { status: 200 });
}