import axios from "axios"
import { ProductObject, ProductsResponse } from "@/models/Product"

const baseUrl = "https://dummyjson.com/products"

async function getAllProducts(): Promise<ProductsResponse> {
    const response = await axios.get(baseUrl)
    return response.data
}

async function getSingleProduct(id: string): Promise<ProductObject> {
    const url = `${baseUrl}/${id}`

    const response = await axios.get(url)
    return response.data
}

export { getAllProducts, getSingleProduct }
