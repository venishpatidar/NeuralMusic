import React from 'react'
import Canvas from '../Canvas'
import CircularButton from '../CircularButton'
import HindiSript from '../HindiScript'
import Logo from '../Logo'
import MiceQues from '../MicQues'
import NeuralNetworkSvg from '../NeuralNetworkSvg'
import Piano from '../Piano'
import SelectorPageAbstract from '../SelectorPageAbstract'
import { Block, Container, DetailContainer, DetailTitle, Header, IconContainer, OptionContainer, Para, Title } from './SelectorPageElements'

/*
<Map>
0 -> Neural Piano
1 -> Neural Singer Identifier
2 -> Neural Lyrics Generator
3 -> Neural Music
*/


const ListTitles  =  [
"Neural Piano",
"Neural Singer Identifier",
"Neural Lyrics Generator",
"Neural Music",
]

const ListDetails = [
"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
]


const SelectorPage = () => {
    const [selectedOption , setSelectedOption] = React.useState(-1)

    return (
        <Canvas>
            <SelectorPageAbstract/>
            <Container>
                <Header>
                    <CircularButton to="/home"  backArrow={true}/>
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <div style={{width:"100px",height:"100px",}}>
                            <Logo />
                        </div>
                        <Title>
                            Neural Music
                        </Title>
                    </div>
                    <CircularButton questionMark={true}/>
                </Header>
                <OptionContainer>
                    <div style={{justifyContent:'space-evenly',display:"flex",width:'80%',flexDirection:"row"}}>
                        <IconContainer to="/NeuralPiano" onMouseLeave={()=>{setSelectedOption(-1)}} onMouseEnter={()=>{setSelectedOption(0)}}>
                            <div style={{width:"75px",height:"75px",}}>
                                <Piano/>
                            </div>
                        </IconContainer>
                        <IconContainer to="/NeuralSingerIdentifier" onMouseLeave={()=>{setSelectedOption(-1)}} onMouseEnter={()=>{setSelectedOption(1)}}>
                            <div style={{width:"75px",height:"75px",}}>
                                <MiceQues/>
                            </div>
                        </IconContainer>

                        <IconContainer to="/NeuralLyricsGenerator" onMouseLeave={()=>{setSelectedOption(-1)}} onMouseEnter={()=>{setSelectedOption(2)}}>
                            <div style={{width:"75px",height:"75px",}}>
                                <HindiSript/>
                            </div>
                        </IconContainer>
                        <IconContainer to="/NeuralSongGenerator" onMouseLeave={()=>{setSelectedOption(-1)}} onMouseEnter={()=>{setSelectedOption(3)}}>
                            <div style={{width:"75px",height:"75px",}}>
                                <NeuralNetworkSvg/>
                            </div>
                        </IconContainer>
                    </div>
                </OptionContainer>
                <DetailContainer>
                    {selectedOption===-1?
                        null
                        :
                        <Block>
                            <Para>
                                {ListDetails[selectedOption]}
                            </Para>
                            <div style={{width:"50%",height:"5px",background:'white',marginBottom:"20px"}}></div>
                            <DetailTitle>{ListTitles[selectedOption]}</DetailTitle>
                        </Block>
                    }
                </DetailContainer>
            </Container>
        </Canvas>
    )
}

export default SelectorPage
