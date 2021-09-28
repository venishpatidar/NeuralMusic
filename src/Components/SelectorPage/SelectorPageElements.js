import styled from "styled-components";
import {BsArrowRight, BsArrowRightShort} from "react-icons/bs";
import {NavLink} from 'react-router-dom';
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
    user-select: none;
    
`

export const OptionContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const IconContainer = styled.div`
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