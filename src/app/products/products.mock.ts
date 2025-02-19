export const productsList: Product[] = [
  { id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1 Litro' },
  { id: 2, name: 'Detergente', price: 5, description: 'Dura 120 lavados' },
  {
    id: 3,
    name: 'Limpa Vidrios',
    price: 7,
    description: 'Tus vidrios transparentes',
  },
  {
    id: 4,
    name: 'Quita Grasa',
    price: 8,
    description: 'Cocina tranquilo, nosotros limpiamos',
  },
  {
    id: 5,
    name: 'Perfumina',
    price: 2
  },
];

export interface Product {
  id: number | string;
  name: string;
  price: number;
  description?: string;
}
