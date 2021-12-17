import { createGlobalStyle } from "styled-components";

const lightTheme = {
    body: '#fff',
    fontColor: '#000',
};

const darkTheme = {
    body: '#2d3033',
    fontColor: '#fff',
}

const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body};
    };
    .card{
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor}
    };
    .recipe{
        color: ${(props) => props.theme.fontColor};
    }
    .cardAbout{
        color: ${(props) => props.theme.fontColor};
    }
`;

export {lightTheme, darkTheme, GlobalStyles}