import { ReactElement, useState, FormEvent } from "react"
import { CenteredContainer } from "components/CenteredContainer"
import { Link, useNavigate } from "react-router-dom"
import { v4 } from "uuid"
import Toast from "components/Toast"
type ToastType = "success" | "failure" | "warning"

interface ToastComponent {
    toastMessage: string
    toastType: ToastType
    id: string
}

const SignUpPage = (): ReactElement => {
    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [toastList, setToastList] = useState<ToastComponent[]>([])
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
                const errorToast: ToastComponent = {
                    toastMessage: `${resBody.error}`,
                    toastType: "failure",
                    id: v4(),
                }
                setToastList(toastList.concat(errorToast))
                return
            }
            const successToast: ToastComponent = {
                toastMessage: "User registered! Redirecting to login.",
                toastType: "success",
                id: v4(),
            }
            setToastList(toastList.concat(successToast))

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
            <Toast toastList={toastList} setToastList={setToastList} />
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
