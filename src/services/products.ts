import axios from "axios"

const baseUrl = "https://dummyjson.com/products"

const getAllProducts = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getSingleProduct = async (id: string) => {
    const url = `${baseUrl}/${id}`

    const response = await axios.get(url)
    return response.data
}

export { getAllProducts, getSingleProduct }
