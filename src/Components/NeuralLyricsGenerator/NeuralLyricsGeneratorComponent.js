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
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: flex;
    flex:1;
    flex-direction: column;
    background-color: blue;
    background: radial-gradient(farthest-corner at 50% -500px, #00bfff  ,transparent , transparent);
    justify-content: center;
    align-items: center;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
`

export const TextAreaContainer = styled.textarea`
    width: 300px;
    height: 100px;
    background-color: transparent;
    outline: none;
    border: none;
    border-style:solid;
    border-color: white;
    border-radius: 10px;
    border-width: 2px;
    color: white;
    padding: 15px;
    font-size: 1rem;
    resize:none;
`


export const GenrateButton = styled.button`
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
    transition: background-color 0.4s ease-in;
    &:hover{
        background-color: white;
        color: black;
    }
`

export const GeneratedTextContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction:column;
    align-items: center;
`

export const GeneratedText = styled.p`
    margin:0;
    padding:0;
    color: white;
    font-size:1.5rem;
    text-align: center;
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

export const Para = styled.p`
    margin:0px;
    width: 80%;
    color: white;
    font-size: 1.3em;
    user-select: none;
    text-align:center;
    
`