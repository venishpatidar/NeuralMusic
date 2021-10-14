import React from 'react'
import { NEURAL_SONG_GENERATOR_SERVER_ADDR } from '../../utils'
import Canvas from '../Canvas'
import CircularButton from '../CircularButton'
import { AxisText, AxisX, AxisY, ColorBar, ColorBarAxis, Container, ContentContainer, Header, HeaderContainer, HeatMapBox, HeatMapBoxContainer, HeatMapPlot, Title, Button } from './NeuralSongGeneratorComponents'






class NeuralSongGenerator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            boxWidth:0,
            boxHeight:0,
        }
    }
 
    componentDidMount(){
        // var cont = document.getElementById("HeatMapContainer")
        // var {height} = cont.getBoundingClientRect();
        // console.log(height/7)
        // this.setState({boxHeight:((height/8)-5)+'px',boxWidth:((height/8)-5)+'pxm'})
    }
 
    render(){
        var ar = [];
        var eightAr = []
        var i=0;
        for(i=0;i<8;i++){
            eightAr.push(0)
        }
        for(i=0;i<16;i++){
            ar.push(0)
        }
        function pickHex(color1, color2, weight) {
            var w1 = weight;
            var w2 = 1 - w1;
            var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
                Math.round(color1[1] * w1 + color2[1] * w2),
                Math.round(color1[2] * w1 + color2[2] * w2)];
            return rgb;
        }
        function GetHeatColor(weight){
            let a;
            if(weight<=0.25){
                a = pickHex([68,1,84],[62,73,137],weight)
                a = 'rgba('+a[0]+','+a[1]+','+a[2]+',1)'
            }
            else if(weight<=0.50){
                a = pickHex([62,73,137],[34,139,141],weight)
                a = 'rgba('+a[0]+','+a[1]+','+a[2]+',1)'
            }
            else if(weight<=0.75){
                a = pickHex([34,139,141],[79,195,105],weight)
                a = 'rgba('+a[0]+','+a[1]+','+a[2]+',1)'
            }
            else if(weight<=1.0){
                a = pickHex([79,195,105],[253,231,36],weight)
                a = 'rgba('+a[0]+','+a[1]+','+a[2]+',1)'
            }
            return a
        }
        return (
            <Canvas>
                <Container>
                    <HeaderContainer>
                        <Header>
                            <CircularButton to="/selector"  backArrow={true}/>
                            <CircularButton questionMark={true}/>
                        </Header>
                    </HeaderContainer>

                    <ContentContainer> 
                        
                        
                        <Title>LATENT VECTOR</Title>


                        <HeatMapPlot>
                            <AxisY>
                                {eightAr.map((data,index)=>{
                                        return(
                                            <AxisText>{7-index}</AxisText>
                                        )
                                    })}
                            </AxisY>
                            <HeatMapBoxContainer id="HeatMapContainer">
                                {ar.map((data,index)=>{
                                    return(
                                        <HeatMapBox backgroundHeatMapColor={()=>{
                                            let ra = (Math.random());
                                            return(GetHeatColor(ra))}}  />
                                    )
                                })}

                                {ar.map((data,index)=>{
                                    return(
                                        <HeatMapBox backgroundHeatMapColor={()=>{
                                            let ra = (Math.random());
                                            return(GetHeatColor(ra))}}  />

                                    )
                                })}
                                
                                {ar.map((data,index)=>{
                                    return(
                                        <HeatMapBox backgroundHeatMapColor={()=>{
                                            let ra = (Math.random());
                                            return(GetHeatColor(ra))}}  />

                                    )
                                })}
                                {ar.map((data,index)=>{
                                    return(
                                        <HeatMapBox backgroundHeatMapColor={()=>{
                                            let ra = (Math.random());
                                            return(GetHeatColor(ra))}}  />

                                    )
                                })}
                                {ar.map((data,index)=>{
                                    return(
                                        <HeatMapBox backgroundHeatMapColor={()=>{
                                            let ra = (Math.random());
                                            return(GetHeatColor(ra))}}  />

                                    )
                                })}
                                {ar.map((data,index)=>{
                                    return(
                                        <HeatMapBox backgroundHeatMapColor={()=>{
                                            let ra = (Math.random());
                                            return(GetHeatColor(ra))}}  />

                                    )
                                })}
                                {ar.map((data,index)=>{
                                    return(
                                        <HeatMapBox backgroundHeatMapColor={()=>{
                                            let ra = (Math.random());
                                            return(GetHeatColor(ra))}}  />

                                    )
                                })}
                                {ar.map((data,index)=>{
                                    return(
                                        <HeatMapBox backgroundHeatMapColor={()=>{
                                            let ra = (Math.random());
                                            return(GetHeatColor(ra))}}  />

                                    )
                                })}
                                
                            </HeatMapBoxContainer>
                            
                            <ColorBar/>

                            <ColorBarAxis>
                                {ar.map((data,index)=>{
                                    return(
                                        <AxisText>{index}</AxisText>
                                    )
                                })}
                            </ColorBarAxis>
                            <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
                            <AxisX>
                                {ar.map((data,index)=>{
                                    return(
                                        <AxisText>{index}</AxisText>
                                    )
                                })}
                            </AxisX>                                
                            </div>
                        </HeatMapPlot>

                        <Button onClick={()=>{
                            fetch(NEURAL_SONG_GENERATOR_SERVER_ADDR,{
                                method:'POST',
                                body:'[1,23,3]'
                            })

                            .then((response)=>{
                                return response.blob()
                            })
                            .then(async(response)=>{

                                const wav = new Blob([response], { type: 'audio/wav' })
                                const url = window.URL.createObjectURL(wav)
                                const audio = new Audio(url)
                                audio.load()
                                await audio.play()

                                console.log(response)
                            })
                        }}  style={{marginTop:30}}>
                            Generate
                        </Button>


                        
                    </ContentContainer>
                </Container>
            </Canvas>
        )
    }
}
export default NeuralSongGenerator
