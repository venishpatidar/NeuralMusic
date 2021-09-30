import styled from "styled-components";
import {NavLink} from 'react-router-dom';
export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    width: auto;
    display:flex;
    flex:1;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

export const Title = styled.h1`
    color: white;
    margin:0px;
    padding: 0px;
    font-size: 4rem;
    font-weight: bold;
    user-select: none;


`




export const OptionContainer = styled.div`
    display:flex;
    flex:1;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`

export const IconContainer = styled(NavLink)`
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: center;
    border-style: solid;
    border-color: white;
    border-width:medium;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.2);
    }
`

export const DetailContainer = styled.div`
   
    display:flex;
    flex:1.5;

`

export const DetailTitle = styled.h2`
    color: white;
    margin:0;
    padding:0;
    font-size: 3.5em;
    user-select: none;
    
`

export const Para = styled.p`
    margin:0px;
    width: 80%;
    color: white;
    font-size: 1.3em;
    user-select: none;
    
`

export const Block = styled.div`
    display: flex;
    flex-direction: column-reverse;
    animation: moving 0.2s ease-in-out ;

    padding: 40px;
    margin-top: auto;
    background-color: rgba(50,50,50,0.5);

    @keyframes moving{
        0% {
            transform: translateY(100px);
        }
        100% {
            transform:  translateY(0px)
        }
    }
`