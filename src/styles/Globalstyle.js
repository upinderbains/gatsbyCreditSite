import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

:root {

  //color
  --color-primary: #c69963;
  --color-primary-dark: #B28451;

  --color-secondary: #101d2c;
  --color-grey-light-1: #f9f7f6;
  --color-grey-light-2: #aaa;
  --color-white: #ffffff;
  --color-grey-dark-1: #54483A;
  --color-grey-dark-2: #6D5D4B;

  //font

  --ff-primary: 'Nunito', 'sans-serif';
  --ff-secondary: 'Josefin Sans', 'sans-serif';

  --fs-xs: 1.2rem;
  --fs-sm: 1.4rem;
  --fs-md: 1.6rem;
  --fs-lg: 1.8rem;
  --fs-xl: 2rem;
  --fs-xxl: 2.2rem;
  --fs-h3: 3.2rem;
  --fs-h2: 3.5rem;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
  box-sizing: border-box;
  font-size: 62.5%;
  @media (max-width: 700px) { 
    font-size: 52.5%;
  }
}

body{
  font-family: var(--ff-primary);
  color: var(--color-grey-dark-2);
  font-weight: 300;
  line-height: 1.6;
}

h4{
  font-weight: 600;
  font-size: var(--fs-xl);

}
ul{
  list-style: none;
}

#root{
  display: grid;
  grid-template-rows: 100vh 40vw repeat(4, min-content);
  grid-template-columns: [full-start] minmax(4rem, 1fr) [center-start] repeat(10, [col-start] minmax(min-content, 14rem) [col-end ]) [center-end] minmax(4rem, 1fr) [full-end];
}


`

export default GlobalStyle
