import React from 'react'
import Canvas from '../Canvas'
import CircularButton from '../CircularButton'
import HindiSript from '../HindiScript'
import Logo from '../Logo'
import MiceQues from '../MicQues'
import NeuralNetworkSvg from '../NeuralNetworkSvg'
import Piano from '../Piano'
import SelectorPageAbstract from '../SelectorPageAbstract'
import { Container, Header, IconContainer, OptionContainer, Title } from './SelectorPageElements'

const SelectorPage = () => {
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
                    
                    <IconContainer>
                        <div style={{width:"75px",height:"75px",}}>
                            <Piano/>
                        </div>
                    </IconContainer>
                    
                    <IconContainer>
                        <div style={{width:"75px",height:"75px",}}>
                            <MiceQues/>
                        </div>
                    </IconContainer>

                    <IconContainer>
                        <div style={{width:"75px",height:"75px",}}>
                            <HindiSript/>
                        </div>
                    </IconContainer>

                    <IconContainer>
                        <div style={{width:"75px",height:"75px",}}>
                            <NeuralNetworkSvg/>
                        </div>
                    </IconContainer>
                </OptionContainer>

            </Container>
        </Canvas>
    )
}

export default SelectorPage
