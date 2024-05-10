import { useAuth } from "auth/useAuth"
import { ReactElement, FormEvent, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { CenteredContainer } from "components/CenteredContainer"
import { Link, useNavigate } from "react-router-dom"
const LoginPage = (): ReactElement => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogin = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault()
        try {
            const payload = {
                username,
                password,
            }

            const res = await fetch("http://localhost:8080/auth/login", {
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            })

            const resBody = await res.json()
            if (!res.ok) {
                toast.error(resBody.error)
                return
            }

            const { token } = resBody
            if (!token) {
                throw new Error("Server Error! Token missing!")
            }

            await auth.login(token)
            toast.success("Logged In! Redirect in a moment...")
            setTimeout(() => {
                navigate("/")
            }, 3000)
        } catch (err) {
            console.log(err)
            throw new Error("Error while signing up!")
        } finally {
            setPassword("")
            setUsername("")
        }
    }

    return (
        <CenteredContainer>
            <div className="auth-page-header">
                <h1>Login into</h1>{" "}
                <img src="./src/assets/online-shopping.png" alt="logo" />
            </div>
            <ToastContainer autoClose={3000} closeOnClick />
            <form onSubmit={handleLogin} className="auth-form">
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
                    Login
                </button>
            </form>
            <div>
                Not registered?{" "}
                <Link to={"/signup"} className="auth-link">
                    Sign Up!
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
export { LoginPage }
