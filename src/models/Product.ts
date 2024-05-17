export interface ProductsResponse {
    limit: number
    total: number
    skip: number
    products: ProductObject[]
}

export interface ProductObject {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}
