import styled  from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
`

export const Logoimg = styled.img`
    object-fit: cover;
    width: auto;
    height: 50vh;
    align-self: center;
    margin-bottom: 100px;
`

export const AnimatedLogo = styled.img`
    object-fit: cover;
    width: auto;
    height: 60vh;
    align-self: center;
    margin-bottom: 40px;
    position: absolute;
    animation:moving 10s linear infinite;
    @keyframes moving{
        0%{
            transform: rotateY(-0deg);
            transform: rotateX(-0deg);
        };
        100%{
            transform: rotateY(-180deg);
            transform: rotateX(-360deg);
        }
    }
`