import { ReactElement } from "react"
import * as Styled from "./styles"

const Footer = (): ReactElement => {
    return (
        <Styled.Footer>
            <div className="footer-content">
                <ul className="footer-list">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">My network</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                    <li>
                        <a href="#">Sales</a>
                    </li>
                    <li>
                        <a href="#">Security</a>
                    </li>
                </ul>
                <p>Marketplace Inc © 2024</p>
            </div>
        </Styled.Footer>
    )
}

export { Footer }
