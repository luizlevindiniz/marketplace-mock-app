import axios, { AxiosError } from "axios"
import { ProductObject, ProductsResponse } from "@/models/Product"

const baseUrl = "https://dummyjson.com/products"

async function getAllProducts(): Promise<ProductsResponse> {
    const response = await axios.get(baseUrl)
    return response.data
}

type ErrorResponse = {
    message: string
}

async function getSingleProduct(
    id: string
): Promise<ProductObject | AxiosError<ErrorResponse>> {
    const url = `${baseUrl}/${id}`

    try {
        const response = await axios.get(url)
        return response.data
    } catch (_err: unknown) {
        const err = _err as AxiosError<ErrorResponse>
        console.log(err)
        return err
    }
}

export { getAllProducts, getSingleProduct }
