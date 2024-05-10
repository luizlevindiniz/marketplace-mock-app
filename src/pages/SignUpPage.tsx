import { ReactElement, useState, FormEvent } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { CenteredContainer } from "components/CenteredContainer"
import { Link, useNavigate } from "react-router-dom"
const SignUpPage = (): ReactElement => {
    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()

    const handleSignUp = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault()

        try {
            const payload = {
                name,
                username,
                password,
            }

            const res = await fetch("http://localhost:8080/auth/signup", {
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
            toast.success("User registered! Redirecting to login.")
            setTimeout(() => {
                navigate("/login")
            }, 3000)
        } catch (err) {
            console.log(err)
            throw new Error("Error while signing up!")
        } finally {
            setName("")
            setPassword("")
            setUsername("")
        }
    }

    return (
        <CenteredContainer>
            <div className="auth-page-header">
                <h1>Welcome to</h1>{" "}
                <img src="./src/assets/online-shopping.png" alt="logo" />
            </div>
            <ToastContainer autoClose={3000} closeOnClick />
            <form onSubmit={handleSignUp} className="auth-form">
                <div className="auth-form-field">
                    <label htmlFor="name">Full Name: </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="auth-form-field">
                    <label htmlFor="username">Username: </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="auth-form-field">
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
