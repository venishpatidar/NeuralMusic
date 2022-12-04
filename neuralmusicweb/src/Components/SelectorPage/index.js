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
"Neural Piano is an A.I. duet, where you can play some melody on keyboard and then it's A.I.'s turn to play melody in harmony with your created melody, as that of human would play. Morever there's lot more than just piano, User can select any instrument from the list of instrument (on right top side).",
"Neural Singer Identifier is an Artificial Intelligence that can predict the name of singer whose song would be uploaded by user. Each song that will be uploaded to Neural Singer Identifier must be 10 sec long and contain singer's voice in at least 80% of through out the track. Uploading song more than 10 sec long will be reult in randomly chosen 10 sec long track from it and giving prediciton on that track",
"Neural Lyrics Generator is an Artificial Intelligence that can generate or suggest lyrics ( If no input is given ), It can also complete the rest of lyrics provided few lines. Default length of prediciton is 400 words (prediction of more or dynamical words is future work).",
"Neural Music is an Artificial Intelligence that can generate music (well at least reminiscence of song currently kishore kumar's song) in kishore kumar voice, Intresting fact it is research project which treats sees audio signal and generating song based on it. User can see latent vector in neural song generator, this latent vector is then going to get transform into song, it intresting and mind blowing thing to observe that simple zeros and ones can do lot more. This section is created keeping in mind that fact mind can still humm or at least recall the pattern of song after hearing it for first time.",
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
                            <Para style={{width:'60%'}}>
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
