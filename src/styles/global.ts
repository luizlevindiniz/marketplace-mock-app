import { createGlobalStyle } from "styled-components"
import theme from "./theme"

const ResetStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}
html{
  height:100%;
  margin:0;
  padding:0;
}


body {
  font-size: inherit;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color:${theme.colors.default};
  color: ${theme.colors.primary};
  height:100%;
}

#root{
  display: flex;
  flex-direction: column;
  min-height: 100%;
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

@media screen and (max-width: 1300px) {
  html {
  font-size: 15px;
}
.headline-details-page-h1{
  font-size: 2rem;
}

#products-wrapper-detail-page .product-detail{
  max-width: 1100px;
}
}

@media screen and (max-width: 1200px) {
   html  {
  font-size: 14px;
}

#products-wrapper-detail-page .product-detail{
  max-width: 1000px;
}

#products-wrapper-detail-page .slide-image{
  max-width:750px;
}

}

@media screen and (max-width: 1100px) {
   html  {
  font-size: 13px;
}

#products-wrapper-detail-page .product-detail{
  max-width: 900px;
}

#products-wrapper-detail-page .slide-image{
  max-width:700px;
}
}

@media screen and (max-width: 1000px) {
   html  {
  font-size: 12px;
}
  .product-summary{
    display:none
  }
  .product-body-wrapper{
    min-height: 160px;
  }

  #products-wrapper-detail-page .product-detail{
  max-width: 800px;
}

#products-wrapper-detail-page .slide-image{
  max-width:650px;
}
}

@media screen and (max-width:870px) {

  .products-content{
    grid-template-columns:repeat(3,1fr)
  }

  .headline-h1{
   font-size: 1.5em;
  }

  #products-wrapper-detail-page .product-detail{
  max-width: 700px;
}

#products-wrapper-detail-page .slide-image{
  max-width:550px;
}

}
  

@media screen and (max-width:700px) {

  html  {
  font-size: 11px;
}

.products-content{
  grid-template-columns:repeat(2,1fr)
}

.search-bar-wrapper{
  display: none;
}

.search-bar-input{
  display:none;
}

.search-button-sprite{
  display: none;
}

.headline-h1{
 font-size: 1.4em;
}


#products-wrapper-detail-page .product-detail{
  max-width: 550px;
}

#products-wrapper-detail-page .slide-image{
  max-width:450px;
}

#products-wrapper-detail-page .back-button{
  width: inherit;
  height: 1.8rem;
  border-radius:0;
}

}

@media screen and (max-width:550px) {

.products-content{
  grid-template-columns:repeat(1,1fr)
}

#details-page-call .main-title{
  font-size: 3rem;
}

#products-wrapper-detail-page .product-detail{
  max-width: 500px;
}

#products-wrapper-detail-page .slide-image{
  max-width:300px;
}

}


@media screen and (max-width:500px) {
  .product-card{
    max-width: 330px;
  }
.headline-details-page-h1{
  font-size: 1.2em;
}

  #details-page-call .main-title{
  font-size: 2.5rem;
}

#products-wrapper-detail-page .product-detail{
  max-width: 450px;
}
}

@media screen and (max-width:450px) {

  .navbar-items{
    padding: 0;
  }

  .logo-title a{
    font-size:1.1rem;
  }

  .headline-details-page-h1{
    font-size: 1.1em;
  }
  
  #details-page-call .main-title{
    font-size: 2.2rem;
  }
  
  #products-wrapper-detail-page .product-detail{
    max-width: 450px;
  }

  #products-wrapper-detail-page .slide-image{
  max-width:250px;
}

.footer-content .footer-list{
  display: block;
}

.product .product-head .title{
  font-size:1.4rem;
}

.product .product-head .price{
  font-size:1.5rem;
}


}  


@media screen and (max-width:400px){
  .logo-title{
    display: none;
  }

  .headline-details-page-h1{
    font-size: 0.8em;
  }
  
    #details-page-call .main-title{
    font-size: 1.7rem;
  }
  
  #products-wrapper-detail-page .product-detail{
    max-width: 400px;
  }

  #products-wrapper-detail-page .slide-image{
  max-width:175px;
}
}


`

export { ResetStyle }
