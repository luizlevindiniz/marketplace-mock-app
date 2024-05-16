import { configure, shallow, mount, render } from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"

configure({ adapter: new Adapter() })
export { shallow, mount, render }
