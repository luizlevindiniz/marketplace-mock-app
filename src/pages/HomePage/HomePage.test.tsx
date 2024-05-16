import { HomePage } from "./HomePage"
import { mount, shallow, ShallowWrapper } from "enzyme"
import { expect, test, beforeEach } from "@jest/globals"
import { ReactElement } from "react"
import * as productsService from "../../services/products"
jest.mock("../../services/products")
describe("src/pages/HomePage", () => {
    describe("when products API is offline, does the homepage ", () => {
        let wrapper: ShallowWrapper<ReactElement>
        beforeEach(() => {
            wrapper = shallow(<HomePage />)
        })
        test("render the header", () => {
            const header = wrapper.find({ "data-testid": "products-headline" })
            expect(header.is("h1")).toBe(true)
            expect(header).toBeDefined()
            expect(header.text()).toBe("Products")
        })

        test("render the error paragraph", () => {
            const paragraph = wrapper.find({
                "data-testid": "not-found-paragraph",
            })
            expect(paragraph.is("p")).toBe(true)
            expect(paragraph).toBeDefined()
            expect(paragraph.text()).toBe(" No products found =/ ")
        })
    })

    describe("when products API is online, does the homepage", () => {
        beforeEach(() => {
            jest.spyOn(productsService, "getAllProducts").mockResolvedValueOnce(
                {
                    products: [
                        {
                            id: 1,
                            title: "iPhone 9",
                            description:
                                "An apple mobile which is nothing like apple",
                            price: 549,
                            discountPercentage: 12.96,
                            rating: 4.69,
                            stock: 94,
                            brand: "Apple",
                            category: "smartphones",
                            thumbnail:
                                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                            images: [
                                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                            ],
                        },
                    ],
                    total: 100,
                    skip: 0,
                    limit: 30,
                }
            )
        })
        afterEach(() => {
            jest.clearAllMocks()
        })
        test("render all products", async () => {
            const res = await productsService.getAllProducts()
            console.log(res)
            expect(productsService.getAllProducts).toHaveBeenCalledTimes(1)
            const wrapper = mount(<HomePage />)
            await Promise.resolve()
            console.log(wrapper.debug())
        })
    })
})
