import { ReactElement, useState, FormEvent } from "react"
import "react-toastify/dist/ReactToastify.css"
import { CenteredContainer } from "components/CenteredContainer"
import { Link, useNavigate } from "react-router-dom"
const SignUpPage = (): ReactElement => {
    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()

    const handleSignUp = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        navigate("/login")
    }

    return (
        <CenteredContainer>
            <div className="auth-page-header">
                <h1>Welcome to</h1>{" "}
                <img src="./src/assets/online-shopping.png" alt="logo" />
            </div>
            <form onSubmit={handleSignUp} className="auth-form">
                <div>
                    <label htmlFor="name">Full Name: </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="auth-btn">
                    Sign Up
                </button>
            </form>
            <div>
                Already registered?{" "}
                <Link to={"/login"} className="auth-link">
                    Log In!
                </Link>
            </div>
            <div>
                Lost?{" "}
                <Link to={"/"} className="auth-link">
                    Back Home!
                </Link>
            </div>
        </CenteredContainer>
    )
}
export { SignUpPage }
