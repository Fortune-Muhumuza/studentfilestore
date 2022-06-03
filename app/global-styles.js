import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

a{
  text-decoration: none;
}

.mainContainer{
  display: flex;
  background-color: rgb(236, 233, 233);
}

.mainContents{
  flex: 1;
}
`;

export default GlobalStyle;
