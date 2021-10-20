import React from 'react'
import { BsFillStopFill, BsPause, BsPlay } from 'react-icons/bs'
import { GET_LATENT_VECTOR_SERVER_ADDR, GET_SPECTROGRAM_SERVER_ADDR, NEURAL_SONG_GENERATOR_SERVER_ADDR } from '../../utils'
import Canvas from '../Canvas'
import CircularButton from '../CircularButton'
import { AxisText, AxisX, AxisY, ColorBar, ColorBarAxis, Container, ContentContainer, Header, HeaderContainer, HeatMapBox, HeatMapBoxContainer, HeatMapPlot, Title, Button, LoaderContainer, LoaderImage,Para, WaveformContianer, Wave, ButtonContainer, StopButton, PlayButton, ResultContainer, ImageContainer, SpectographImage } from './NeuralSongGeneratorComponents'
import WaveSurfer from 'wavesurfer.js';





class NeuralSongGenerator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            boxWidth:0,
            boxHeight:0,
            isLoading:true,
            err:false,
            errMessage:'',
            latent_vector:[[1],[1],[1],[1],[1],[1],[1],[1]],
            scale:[0.25],
            onGeneratingScreen:false,
            audio:null,
            audioUrl:null,
            spectrogramSrc:''
        }
    }
 
    componentDidMount(){

        this.fetchLatentVector()
       
    }

    fetchLatentVector(){
        fetch(GET_LATENT_VECTOR_SERVER_ADDR,{
            method:"GET",
        })
        .then(response=>{
            if(response.status===200){
                return response.json()
            }
            else{
                var error = new Error('Error on server side ERROR STATUS ' + response.status + ': ' + response.statusText+' Please refresh or press F5');
                error.response = response;
                throw error;
            }
        },error=>{throw error})
        .then(response=>{
            var latent_vector =JSON.parse(response.latent_vector)
            var scale = JSON.parse(response.scale)
            this.setState({latent_vector:latent_vector,scale:scale,isLoading:false,err:false,errMessage:''})
        })
        .catch((error)=>{
            if(error.message==="Failed to fetch"){
                this.setState({err:true,isLoading:false,errMessage:"UH OH.... SERVER DOWN"})
            }
            else{
                this.setState({err:true,isLoading:false,errMessage:error.message})
            }
        })
    }


    pickHex(color1, color2, weight) {
        var w1 = weight;
        var w2 = 1 - w1;
        var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
            Math.round(color1[1] * w1 + color2[1] * w2),
            Math.round(color1[2] * w1 + color2[2] * w2)];
        return rgb;
    }
    GetHeatColor(weight){
        let a;  
        var num;
        var decimal;
        if(weight<=this.state.scale[0]){
            return a = 'rgba(68,1,84,1)'
        }
        else if(weight<=(-2.0)){
            num = Math.abs(weight)
            decimal = num - Math.floor(num)
            decimal = 1-decimal
            a = this.pickHex([68,1,84],[69,54,129],decimal)
            return a = 'rgba('+a[0]+','+a[1]+','+a[2]+',1)'
        }
        else if(weight<=(-1.0)){
            num = Math.abs(weight)
            decimal = num - Math.floor(num)
            decimal = 1-decimal
            a = this.pickHex([69,54,129],[50,99,141],decimal)
            return a = 'rgba('+a[0]+','+a[1]+','+a[2]+',1)'
        }
        else if(weight<=(0.0)){
            num = Math.abs(weight)
            decimal = num - Math.floor(num)
            decimal = 1-decimal
            a = this.pickHex([50,99,141],[34,139,141],decimal)
            return a = 'rgba('+a[0]+','+a[1]+','+a[2]+',1)'
        }
        else if(weight<=(1.0)){
            num = Math.abs(weight)
            decimal = num - Math.floor(num)
            a = this.pickHex([34,139,141],[51,182,121],decimal)
            return a = 'rgba('+a[0]+','+a[1]+','+a[2]+',1)'
        }
        else if(weight<=(2.0)){
            num = Math.abs(weight)
            decimal = num - Math.floor(num)
            a = this.pickHex([51,182,121],[144,214,67],decimal)
            return a = 'rgba('+a[0]+','+a[1]+','+a[2]+',1)'
        }
        else if(weight<=this.state.scale[this.state.scale.length-1]){
            num = Math.abs(weight)
            decimal = num - Math.floor(num)
            a = this.pickHex([144,214,67],[253,231,36],decimal)
            return a = 'rgba('+a[0]+','+a[1]+','+a[2]+',1)'
        }
        else if(weight>=this.state.scale[this.state.scale.length-1]){
            return a = 'rgba(253,231,36,1)'
        }
        return a
    }
    
    hookWave(){
        this.waveform = WaveSurfer.create({
            barWidth: 2,
            cursorWidth: 1,
            container: '#waveform',
            backend: 'WebAudio',
            height: 200,
            width: '50%',
            progressColor: '#ff6103',
            responsive: true,
            waveColor: '#fff',
            cursorColor: 'transparent',
            playing:false,
            spectrogramSrc:''
            });
        const track = document.querySelector('#track');
        this.waveform.load(track);
        this.waveform.on('finish',()=>{
            this.setState({playing:false})
        })
        
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
        // const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';

        return (
            <Canvas>
                <Container>
                    <HeaderContainer>
                        <Header>
                            <CircularButton to="/selector"  backArrow={true}/>
                            <CircularButton questionMark={true}/>
                        </Header>
                    </HeaderContainer>

                    {this.state.err?
                        <LoaderContainer>
                            <div className="block" style={{width:"50%",height:"50%",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <Para>{this.state.errMessage}</Para>
                            </div>
                        </LoaderContainer>
                        :
                        null
                    }


                    {/* {this.state.isLoading?
                        <LoaderContainer>
                            <div className="block" 
                                style={{
                                    width:"50%", 
                                    height:"50%",
                                    display:'flex',
                                    flexDirection:'column', 
                                    justifyContent:'center',
                                    alignItems:'center',
                                    background: 'transparent',
                                    filter: 'blur(50px)',
                                }}>
                                <LoaderImage src="./MusicSymbol.png" />
                                <Para  >LOADING</Para>
                            </div>
                        </LoaderContainer>
                        :
                        null
                    } */}

                    {this.state.isLoading?
                        <LoaderContainer>
                            <LoaderImage src="./MusicSymbol.png" />
                            <Para>Loading</Para>
                        </LoaderContainer>
                        :
                        null
                    }


                    <ContentContainer style={{filter:this.state.isLoading?'blur(20px)':''}}> 


                        <ResultContainer style={{visibility:this.state.onGeneratingScreen?'visible':'hidden'}}>

                            <Title style={{marginBottom:20,borderWidth:0,borderBottomWidth:2,borderStyle:'solid',padding:10,}}>GENERATED AUDIO</Title>
                            
                            <ImageContainer className="">
                                <SpectographImage src={this.state.spectrogramSrc} />
                            </ImageContainer>
                            <Para style={{textAlign:'left',fontSize:"15px",color:'#d0d0d0'}}>
                                Mel Spectrogram of generated audio signal
                            </Para>
                            
                            <WaveformContianer style={{}}>
                                <Wave  id="waveform" />
                                <Para style={{textAlign:'left',fontSize:"15px",color:'#d0d0d0'}}>
                                    Amplitude Time graph of generated audio signal
                                </Para>
                                <audio id="track" src={this.state.audioUrl} />  
                                <ButtonContainer>
                                    {this.state.playing?
                                        <StopButton  onClick={()=>{
                                            this.waveform.stop()
                                            this.setState({playing:false})
                                        }}>
                                            <BsFillStopFill style={{fontSize:30}}/>
                                        </StopButton>
                                        :
                                        null
                                    }
                                    <PlayButton onClick={()=>{
                                        this.waveform.playPause()
                                        
                                        this.setState({playing:!this.state.playing})
                                        }}>
                                        {this.state.playing?
                                            <BsPause  style={{fontSize:30}}/>
                                            :
                                            <BsPlay  style={{fontSize:30}}/>
                                        }
                                    </PlayButton>
                                </ButtonContainer>
                                
                            </WaveformContianer>
                            
                            <Button onClick={()=>{
                                this.setState({isLoading:true,onGeneratingScreen:false})
                                this.fetchLatentVector()
                                this.waveform.destroy()
                            }}>
                                Reset
                            </Button>
                            
                        </ResultContainer>
                        
                        <div style={{visibility:this.state.onGeneratingScreen?'hidden':'visible',width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            
                            <Title style={{marginBottom:20,borderWidth:0,borderBottomWidth:2,borderStyle:'solid',padding:10,}} >LATENT VECTOR</Title>

                            <HeatMapPlot id='HeatMapPlot'>
                                <AxisY style={{}}>
                                    {eightAr.map((data,index)=>{
                                            return(
                                                <AxisText key={index}>{7-index}</AxisText>
                                            )
                                        })}
                                </AxisY>

                                <HeatMapBoxContainer id="HeatMapContainer" className={this.state.onGeneratingScreen?"":""}>
                                    {this.state.latent_vector[7].map((data,index)=>{
                                        
                                        return(
                                            <HeatMapBox style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={index} backgroundHeatMapColor={()=>{
                                                return(this.GetHeatColor(data))}}  >
                                                    <Para style={{fontSize:7,textAlign:'center',margin:0,padding:0}}> {(data)}</Para> 
                                                </HeatMapBox>
                                        )
                                    })}

                                    {this.state.latent_vector[6].map((data,index)=>{
                                        return(
                                            <HeatMapBox style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={index} backgroundHeatMapColor={()=>{
                                                return(this.GetHeatColor(data))}}  >
                                                    <Para style={{fontSize:7,textAlign:'center',margin:0,padding:0}}> {(data)}</Para> 
                                                </HeatMapBox>

                                        )
                                    })}
                                    
                                    {this.state.latent_vector[5].map((data,index)=>{
                                        return(
                                            <HeatMapBox style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={index} backgroundHeatMapColor={()=>{
                                                return(this.GetHeatColor(data))}}  >
                                                    <Para style={{fontSize:7,textAlign:'center',margin:0,padding:0}}> {(data)}</Para> 
                                                </HeatMapBox>

                                        )
                                    })}
                                    {this.state.latent_vector[4].map((data,index)=>{
                                        return(
                                            <HeatMapBox style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={index} backgroundHeatMapColor={()=>{
                                                return(this.GetHeatColor(data))}}  >
                                                    <Para style={{fontSize:7,textAlign:'center',margin:0,padding:0}}> {(data)}</Para> 
                                                </HeatMapBox>

                                        )
                                    })}
                                    {this.state.latent_vector[3].map((data,index)=>{
                                        return(
                                            <HeatMapBox style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={index} backgroundHeatMapColor={()=>{
                                                return(this.GetHeatColor(data))}}  >
                                                    <Para style={{fontSize:7,textAlign:'center',margin:0,padding:0}}> {(data)}</Para> 
                                                </HeatMapBox>

                                        )
                                    })}
                                    {this.state.latent_vector[2].map((data,index)=>{
                                        return(
                                            <HeatMapBox style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={index} backgroundHeatMapColor={()=>{
                                                return(this.GetHeatColor(data))}}  >
                                                    <Para style={{fontSize:7,textAlign:'center',margin:0,padding:0}}> {(data)}</Para> 
                                                </HeatMapBox>

                                        )
                                    })}
                                    {this.state.latent_vector[1].map((data,index)=>{
                                        return(
                                            <HeatMapBox style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={index} backgroundHeatMapColor={()=>{
                                                return(this.GetHeatColor(data))}}  >
                                                    <Para style={{fontSize:7,textAlign:'center',margin:0,padding:0}}> {(data)}</Para> 
                                                </HeatMapBox>
                                        )
                                    })}
                                    {this.state.latent_vector[0].map((data,index)=>{
                                        return(
                                            <HeatMapBox style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={index} backgroundHeatMapColor={()=>{
                                                return(this.GetHeatColor(data))}}  >
                                                    <Para style={{fontSize:7,textAlign:'center',margin:0,padding:0}}> {(data)}</Para> 
                                                </HeatMapBox>

                                        )
                                    })}
                                    
                                </HeatMapBoxContainer>
                                
                                <ColorBar style={{display:this.state.onGeneratingScreen?'none':'unset'}}/>

                                <ColorBarAxis style={{}}>
                                    {this.state.scale.map((data,index)=>{
                                        var orig = this.state.scale[this.state.scale.length-index-1]
                                        var num = Math.floor(orig)
                                        var decimal = orig-num
                                        if(decimal!==0 & num>0){
                                            num = '>'+num
                                        }
                                        else if(decimal!==0 & num<0){
                                            num = '<'+num
                                        }

                                        return(
                                            <AxisText key={index}>{num}</AxisText>
                                        )
                                    })}
                                </ColorBarAxis>
                            
                            </HeatMapPlot>

                            <div style={{display:'flex',width:'100%',justifyContent:'center',}}>
                                <AxisX>
                                    {ar.map((data,index)=>{
                                        return(
                                            <AxisText>{index}</AxisText>
                                        )
                                    })}
                                </AxisX>                                
                            </div>
                            
                            <div style={{display:'flex',width:'42%',flexDirection:'row',}}>
                                <Para style={{textAlign:'left',fontSize:"15px",flex:1,color:'#d0d0d0'}}>
                                    Randomly change latent vector values
                                </Para>
                                <Para onClick={()=>{
                                    this.setState({isLoading:true})
                                    this.fetchLatentVector()
                                }} style={{textAlign:'left',cursor:'pointer',fontSize:"15px",flex:2.5,textDecorationLine:'underline'}}>click here</Para>  
                            </div>

                            <Button onClick={()=>{

                                this.setState({isLoading:true})

                                fetch(NEURAL_SONG_GENERATOR_SERVER_ADDR,{
                                    method:'POST',
                                    body:this.state.latent_vector,
                                })
                                .then(response=>{
                                    if(response.status===200){
                                        return response.blob()
                                    }
                                    else{
                                        var error = new Error('Error on server side ERROR STATUS ' + response.status + ': ' + response.statusText+' Please refresh or press F5');
                                        error.response = response;
                                        throw error;
                                    }
                                },error=>{throw error})
                                .then((response)=>{
                                  
                                    const wav = new Blob([response], { type: 'audio/wav' })
                                    const url = window.URL.createObjectURL(wav)
                                    this.setState({audioUrl:url})
                                    var filename = response.type.toString()
                                    filename = filename.split('/')[1]
                                    this.hookWave()
                                    return filename

                                    // const audio = new Audio(url)

                                    // this.setState({audio:audio,isLoading:false})
                                    // audio.load()

                                    // await audio.play()

                                    // console.log(response)
                                })
                                .then((filename)=>{
                                    fetch(GET_SPECTROGRAM_SERVER_ADDR,{
                                        method:"POST",
                                        body:filename
                                    })
                                    .then((response)=>{
                                        return response.blob()
                                    })
                                    .then((response)=>{
                                        const image = new Blob([response], { type: response.type })
                                        const url = window.URL.createObjectURL(image )
                                        this.setState({onGeneratingScreen:true,isLoading:false,spectrogramSrc:url})
                                    })
                                })
                                .catch((error)=>{
                                    if(error.message==="Failed to fetch"){
                                        this.setState({err:true,isLoading:false,errMessage:"UH OH.... SERVER DOWN"})
                                    }
                                    else{
                                        this.setState({err:true,isLoading:false,errMessage:error.message})
                                    }
                                })
                            }}  style={{marginTop:30,}}>
                                Generate
                            </Button>

                        </div>


                    </ContentContainer>

                </Container>
            </Canvas>
        )
    }
}
export default NeuralSongGenerator
