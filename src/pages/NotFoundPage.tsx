import { ReactElement } from "react"
import { Navbar } from "components/Navbar"
import { Footer } from "components/Footer"
import { Headline } from "components/Headline"

const NotFoundPage = (): ReactElement => {
    return (
        <>
            <Navbar displayNavbar={false} />
            <main className="not-found">
                <Headline>
                    <h1>Ops! 404 - Not Found</h1>
                </Headline>
            </main>
            <Footer />
        </>
    )
}

export { NotFoundPage }
