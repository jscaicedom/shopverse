import { Product } from "@/types/product";

export async function fetchProducts(page: number): Promise<Product[]> {
  const apiUrl = `https://dummyjson.com/products?limit=10&skip=${page}`;
  const response = await fetch(apiUrl);
  const data: ProductApiResponse = await response.json();

  const products: Product[] = data.products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description.slice(0, 100),
    price: product.price,
    currency: 'USD',
    image: product.thumbnail,
    rating: product.rating,
  }));

  return products;
}