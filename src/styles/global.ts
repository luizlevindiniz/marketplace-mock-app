import { createGlobalStyle } from "styled-components"
import theme from "./theme"

const ResetStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color:${theme.colors.default}
}

a {
    color: inherit;
    text-decoration: none;
}

`

export { ResetStyle }
