import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const Header = styled.header`
    width: auto;
    display:flex;
    flex:1;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
`

export const Title = styled.h1`
    color: white;
    margin:0px;
    padding: 0px;
    font-size: 7rem;
    font-weight: bold;
    user-select: none;
`

export const DetailContainer = styled.div`
    width: 50%;
    height: auto;
    margin-top:80px;
    margin-left: 160px;
`
export const Para = styled.p`
    margin:0px;
    width: 80%;
    color: white;
    font-size: 1.3em;
`