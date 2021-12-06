import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.primary};
        color: ${props => props.theme.colors.tertiary}
    }




    #root, body, html {
        height: 100%;
    }
`;
export { GlobalStyle }