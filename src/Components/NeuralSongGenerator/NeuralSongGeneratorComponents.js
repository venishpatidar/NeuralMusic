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
    z-index: 100;
`
export const HeaderContainer = styled.div`
    width: auto;
    display:flex;
    position: absolute;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

`

export const ContentContainer = styled.div`
    transition: all 2000ms linear;
    display: flex;
    flex:1;
    flex-direction: column;
    background-color: blue;
    background: radial-gradient(farthest-corner at 50% -500px, #00bfff  ,transparent , transparent);
    justify-content: center;
    align-items: center;
    
`

export const HeatMapBoxContainer = styled.div`
    width: 40%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(16,1fr) ;
`

export const HeatMapBox = styled.div`
    /* width: 40px; */
    /* height: 40px; */
    width:'NaN';
    height:'NaN';
    /* background-color: darkblue; */
    background-color:${({backgroundHeatMapColor})=>(backgroundHeatMapColor?backgroundHeatMapColor:'darkblue')};
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.2);
        border-style:solid;
        border-width: 1px;
        border-color: white;
        cursor: pointer;

    }

`

export const ColorBar = styled.div`
    height: 100%;
    width: 30px;
    background: rgb(68,1,84);
    background: linear-gradient(0deg, rgba(68,1,84,1) 0%, rgba(62,73,137,1) 25%, rgba(34,139,141,1) 50%, rgba(79,195,105,1) 75%, rgba(253,231,36,1) 100%);
    margin-left:10px;
`
export const HeatMapPlot = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

`
export const ColorBarAxis = styled.div`
    height: 100%;
    width: 30px;
    display: grid;
    align-items: center;
    justify-content: center;
`
export const AxisText = styled.p`
    margin: 0;
    padding: 0;
    color: white;
`

export const AxisY = styled.div`
    height: 100%;
    width: 30px;
    display: grid;
    align-items: center;
    justify-content: center;
`

export const AxisX = styled.div`
    width:40%;
    height: 30px;
    display: grid;
    grid-template-columns: repeat(16,1fr);
`

export const Title = styled.h1`
    margin: 0;
    padding: 0;
    color: white;
    font-weight: normal;

`


export const Button = styled.button`
    user-select: none;
    cursor: pointer;
    background-color: transparent;
    color: white;
    outline: none;
    font-size:1.6rem ;
    border:solid;
    border-width: thin;
    border-radius: 5px;
    padding: 5px 35px;
    width: 250px;
    transition: all 0.4s ease-in;
    &:hover{
        background-color: white;
        color: black;
    }
`
