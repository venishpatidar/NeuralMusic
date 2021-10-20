import React from 'react'
import Canvas from '../Canvas'
import CircularButton from '../CircularButton'
import FirstPageAbstract from '../FirstPageAbstract'
import { ArrowIcon, ArrowIconShort, Container, DetailContainer, Header, Para, StyledButton, Title } from './LandingPageElement'

const LandingPage = () => {
    const [HoverOverButton,setHoverOverButton] = React.useState(false);
    
    return (
        <Canvas>
            <FirstPageAbstract/>
                <Container>
                    <Header>
                        <CircularButton questionMark={true}/>
                    </Header>
                    <DetailContainer>
                        <Title >Neural <Title style={{color:'yellow'}}>Music</Title></Title>
                        <Para>
                            Music is one of the most universal ways of expression and communication. Each human can at least think of one song that gives mental calmness or a song that can energize whole body. As of that its hard to stimulate such thought process through some basic zeros and ones, the human way of thinking or predicting the next lines or pattern in song is truly marvelous job of biological neuruons. Neural Music is a Research project trying to stimulate the same actions and thought process as that of human brain can achieve. As this sound impossible while it is possible as in advancement in deep neural networks and machine learning.
                        </Para>

                        <StyledButton to="/selector" onMouseEnter={()=>{setHoverOverButton(true)}} onMouseLeave={()=>{setHoverOverButton(false)}}>
                            <Para style={{flexDirection:'row',display:"flex",fontSize:"1.5rem",justifyContent:'center',alignContent:"baseline"}}>
                                Get Started
                                {HoverOverButton?<ArrowIcon/>:<ArrowIconShort/>}
                            </Para>
                        </StyledButton>
                    </DetailContainer>
                </Container>

                {/* <SvgComponent/> */}
        </Canvas>
    )
}

export default LandingPage
