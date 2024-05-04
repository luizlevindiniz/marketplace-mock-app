import * as React from "react"
import * as ReactDOM from "react-dom/client"
import App from "./App"
import { ResetStyle } from "styles/global"
import { ThemeProvider } from "styled-components"
import theme from "styles/theme"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ResetStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
