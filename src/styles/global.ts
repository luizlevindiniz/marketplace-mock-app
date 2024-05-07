import { createGlobalStyle } from "styled-components"
import theme from "./theme"

const ResetStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}
html{
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color:${theme.colors.default};
  color: ${theme.colors.primary};
}

a {
    color: inherit;
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
p,
span{
margin:0;
padding:0;
}

ul,
li {
  text-decoration:none;
  list-style-type: none;
  margin: 0;
  padding: 0;
}


`

export { ResetStyle }
