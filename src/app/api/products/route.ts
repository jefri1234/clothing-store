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
    { id: 1, name: 'Polo Clásico', price: 29.99, image: '/img/polos.jpg', colors: ['Negro', 'Blanco'] },
    { id: 2, name: 'Polo Deportivo', price: 34.99, image: '/img/polos.jpg', colors: ['Azul', 'Rojo'] },
  ],
  gorras: [
    { id: 3, name: 'Gorra Snapback', price: 19.99, image: '/img/gorras.jpg', colors: ['Negro'] },
    { id: 4, name: 'Gorra Trucker', price: 24.99, image: '/img/gorras.jpg', colors: ['Azul', 'Verde'] },
  ],
  poleras: [
    { id: 5, name: 'Polera Básica', price: 39.99, image: '/img/poleras.jpg', colors: ['Blanco', 'Gris'] },
  ],
  pantalones: [
    { id: 6, name: 'Pantalón Casual', price: 59.99, image: '/img/pantalones.jpg', colors: ['Negro', 'Azul'] },
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