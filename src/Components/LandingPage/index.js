import React from 'react'
import Button from '../Button'
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
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
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
