import styled, { createGlobalStyle, css } from 'styled-components';

const LABEL_FONT_SIZE = '15px';
const LABEL_COLOR = '#555';
const INPUT_FONT_SIZE = '12px';
const INPUT_FOCUS_COLOR = '#F6DDDF';
const TITLE_COLOR = '#CCF';
const BORDER_ON_HOVER = '3px';


export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-color: #03cce3;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const STitle = styled.h2`
    margin: auto 0;
    margin-top: 10px;
    text-align: center;
    padding: 10px;
    color: #1A2026;
`

export const SForm = styled.div<{ altura?:string}>`
    flex-direction: column;
    width: 700px;
    height: 100%;
    height: ${ props => props.altura};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D7E1E9;
    border-radius: 17px;
    padding: 0 20px 0 20px;
    margin: 10px 0 20px 0;
`