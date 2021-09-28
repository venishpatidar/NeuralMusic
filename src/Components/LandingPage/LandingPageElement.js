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
    user-select: none;
    
`

export const ArrowIcon = styled(BsArrowRight)`
    padding-top: 2px;
    padding-left: 5px;
    transition: all 0.2s ease-in-out;
`


export const ArrowIconShort = styled(BsArrowRightShort)`
    padding-top: 2px;
    padding-left: 5 px;
    transition: all 0.2s ease-in-out;
`


export const StyledButton = styled(NavLink)`
    background-color: transparent;
    border: 0px;
    margin:0px;
    color: white;
    font-size: 2rem;
    border: solid;
    border-color: white;
    border-radius: 30px;
    padding: 10px;
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
    border-width: 2px;
    text-decoration: none;
    margin-top: 40px;


    box-shadow: 17px 15px 38px -2px rgba(0,0,0,0.4);
    -webkit-box-shadow: 17px 15px 38px -2px rgba(0,0,0,0.4);
    -moz-box-shadow: 17px 15px 38px -2px rgba(0,0,0,0.4);
    
    &:hover{
        transition: all 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035);
        background:#000;
        border-width: 0px;
        box-shadow: 17px 15px 38px -2px rgba(0,0,0,0.75);
        -webkit-box-shadow: 17px 15px 38px -2px rgba(0,0,0,0.75);
        -moz-box-shadow: 17px 15px 38px -2px rgba(0,0,0,0.75);
    }
`


