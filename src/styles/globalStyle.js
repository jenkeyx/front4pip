import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  

  html{
    background: ${({ theme }) => theme.body};
  }
  .header-btn{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    width: 60px;
    height: 30px;
  }
  #root {
    align-items: center;
    
    color: ${({ theme }) => theme.text};
    
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  `;


// display: flex;
// flex-direction: column;
// justify-content: center;