import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    width: auto;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding:10px;
`
export const HeaderContainer = styled.div`
    width: auto;
    display:flex;
    position: absolute;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

`

export const PianoContainer = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: blue;
    background: radial-gradient(ellipse at top, #100947 ,transparent, transparent);
`

export const KeyContainer = styled.div`
    width: 500px;
    height: 140px;

`