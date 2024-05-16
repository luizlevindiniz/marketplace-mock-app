import { HomePage } from "./HomePage"
import { shallow, mount, render } from "enzyme"
import { expect, jest, test } from "@jest/globals"

describe("Homepage", () => {
    test("does render entirely", () => {
        const wrapper = shallow(<HomePage />)
    })
})
