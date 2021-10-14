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

export const Para = styled.p`
    margin:0px;
    width: 80%;
    color: white;
    font-size: 1.3em;
    user-select: none;
    text-align:center;
    max-lines: 1;
`

export const UploadButton = styled.button`
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


export const WaveformContianer = styled.div`
    display: flex;  
    flex-direction: column;  
    align-items: center;
    justify-content:flex-end;
    padding-bottom: 100px;
    width: 100%;
    flex: 2;
`

export const Wave = styled.div`
    width: 50%;
    height: 200px;
`
export const PlayButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: transparent;
    border-radius: 50%;
    border: solid;
    border-width:2px;
    border-color: white;
    outline: none;
    cursor: pointer;
    color:white;
    &:hover {
        background: #fff;
        color:#000;
    }
`
export const StopButton = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    border-width:2px;
    height: 60px;
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
    color:white;
    left: 42%;
    &:hover {
        background: #fff;
        color:#000;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 200px;
    align-items: center;
    justify-content: center;
`
export const ResultContainer = styled.div`
    background-color: rgba(50,50,50,0.5);
    flex: 1;
    width: 100%;
   

    animation: movingw 0.2s ease-in-out ;

    padding: 40px;
    margin-top: auto;
    background-color: rgba(50,50,50,0.5);

    @keyframes movingw{
        0% {
            transform: translateY(100px);
        }
        100% {
            transform:  translateY(0px)
        }
    }
`

export const Title = styled.h1`
    color: white;
    padding-right: 40px;
    padding-left: 40px;
    user-select: none;
    
`

export const SingerContainer = styled.div`
    margin-top: 10px;
    padding-right: 40px;
    padding-left: 40px;
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

`

export const Image = styled.img`
    user-select: none;
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;
    border-color: white;
`

export const SingerName = styled.h2`
    color: white;
    margin:0;
    padding:0;
`

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`

export const MatchPercentage = styled.p`
    color: white;
    margin:0;
    padding:0;
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
