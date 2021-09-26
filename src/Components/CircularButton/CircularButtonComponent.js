import styled from "styled-components";
import {BsQuestion,BsArrowLeftShort} from "react-icons/bs"

export const Container = styled.div`
    width: 3rem;
    height: 3rem;
    justify-content:center;
    display: flex;
`


export const Circle = styled.div`
    width: 2rem;
    height: 2rem;
    align-self: center;
    border-radius: 2rem;
    border-width: 2px;
    border-style: solid;
    border-color: white;
    cursor: pointer;
    color: white;
    &:hover{
        background: white;
        color: black;
    }
`

export const QuestionMark = styled(BsQuestion)`
    color: white;
    font-size: 2rem;
`
export const BackArrow = styled(BsArrowLeftShort)`
    font-size: 2rem;
`