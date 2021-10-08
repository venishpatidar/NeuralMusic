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
    transition: all 2000ms linear;
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: blue;
    background: radial-gradient(farthest-corner at 50% -500px, #00bfff  ,transparent , transparent);
   
    
`

export const KeyContainer = styled.div`
    width: 500px;
    height: 140px;

`

export const PlayedKey = styled.div`
    width: 42px;
    height: 140px;
    background-color: blue;
`

export const LoaderContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    flex: 1;
    flex-direction:column;
    align-items: center;

`

export const Para = styled.p`
    margin:0px;
    width: 80%;
    color: white;
    font-size: 1.3em;
    user-select: none;
    text-align:center;
    
`

export const LoaderImage = styled.img`
    width: 250px;
    height: 250px;
    object-fit: fill;
    position: absolute;
    animation: rotateLoaderLogo 2s ease-in-out infinite;
    @keyframes rotateLoaderLogo{
        0% {
            transform: rotate(0deg)
        }
        60% {
            transform:  rotate(180deg)
        }
        90% {
            transform:  rotate(-5deg)
        }
        100% {
            transform:  rotate(0deg)
        }
    }
`