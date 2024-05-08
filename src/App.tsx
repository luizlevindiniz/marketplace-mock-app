import { CartPage } from "pages/CartPage"
import { DetailsPage } from "pages/DetailsPage"
import { HomePage } from "pages/HomePage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ReactElement } from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom"
import { cartReducer } from "reducers/cartReducer"
import { createStore } from "redux"
import { Provider } from "react-redux"

const store = createStore(cartReducer)
function App(): ReactElement {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/cart" Component={CartPage} />
                    <Route path="/product/:id" Component={DetailsPage} />
                    <Route path="/404" Component={NotFoundPage} />
                    <Route path="*" element={<Navigate replace to="/404" />} />
                </Routes>
            </Router>
        </Provider>
    )
}

export default App
