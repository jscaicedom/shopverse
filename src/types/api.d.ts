interface ProductApiResponse {
  products: {
    id: number,
    title: string,
    description: string,
    price: number,
    rating: number,
    thumbnail: string,
  }[]
}