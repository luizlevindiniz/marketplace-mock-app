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

function App(): ReactElement {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/product/:id" Component={DetailsPage} />
                <Route path="/404" Component={NotFoundPage} />
                <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
        </Router>
    )
}

export default App
