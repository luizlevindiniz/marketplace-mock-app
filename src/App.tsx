import { CartPage } from "./pages/CartPage/CartPage"
import { DetailsPage } from "./pages/DetailsPage/DetailsPage"
import { HomePage } from "./pages/HomePage/HomePage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage"
import { SignUpPage } from "./pages/SignUpPage/SignUpPage"
import { ReactElement, ReactNode } from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom"
import { cartReducer } from "./reducers/cartReducer"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { useAuth, AuthProvider } from "./auth/useAuth"

const store = createStore(cartReducer)

const ProtectedRoute = ({ children }: { children: ReactNode }): ReactNode => {
    const auth = useAuth()
    if (!auth.userToken) {
        return <Navigate to={"/login"} />
    }
    return children
}

function App(): ReactElement {
    return (
        <Router>
            <Provider store={store}>
                <AuthProvider>
                    <Routes>
                        <Route path="/" Component={HomePage} />
                        <Route
                            path="/cart"
                            element={
                                <ProtectedRoute>
                                    <CartPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/product/:id"
                            element={
                                <ProtectedRoute>
                                    <DetailsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/login" Component={LoginPage} />
                        <Route path="/signup" Component={SignUpPage} />
                        <Route path="/404" Component={NotFoundPage} />
                        <Route
                            path="*"
                            element={<Navigate replace to="/404" />}
                        />
                    </Routes>
                </AuthProvider>
            </Provider>
        </Router>
    )
}

export default App
