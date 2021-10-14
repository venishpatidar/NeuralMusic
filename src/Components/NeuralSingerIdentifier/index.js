import React from 'react'
import Canvas from '../Canvas'
import CircularButton from '../CircularButton'
import { Container,HeaderContainer,Header, ContentContainer,Image, Para, UploadButton, WaveformContianer, PlayButton, Wave, ButtonContainer, StopButton, ResultContainer, Title, SingerContainer, SingerName, NameContainer, MatchPercentage, LoaderContainer, LoaderImage } from './NeuralSingerIdentifierComponents'
import {NEURAL_SINGER_IDENTIFIER_SERVER_ADDR} from './../../utils';
import WaveSurfer from 'wavesurfer.js';
import {BsFillStopFill, BsPause, BsPlay} from "react-icons/bs"




class NeuralSingerIdentifier extends React.Component {

    constructor(props){
        super(props)
        this.state =  {
            SelectedFileName:'Upload 10 second long audio clip',
            file:null,
            uploaded:false,
            playing:false,
            err:false,
            errmessage:'',
            isLoading:false,
        }
    }
    
    componentDidMount(){
            

    }  
    FileBrowser = ()=>{
        var fo = document.getElementById("fileInput")
        fo.click();
    }
    SetFile = (e)=>{
        try{
            var fi = e.target.files[0]
            this.setState({SelectedFileName:fi.name,file:fi})
        }
        catch{console.log('No file selected')}
    }

    UploadFile = ()=>{
        this.setState({uploaded:true})
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
            });
        const track = document.querySelector('#track');
        this.waveform.load(track);
        this.waveform.on('finish',()=>{
            this.setState({playing:false})
            console.log('a')
        })
        
        // const formData = new FormData()
        // formData.append(
        //     "audioFile",
        //     this.state.file,
        //     this.state.SelectedFileName
        // )


        // fetch(NEURAL_SINGER_IDENTIFIER_SERVER_ADDR,{
        //     method:'POST',
        //     body:formData,
        //     headers: {
        //         'Content-Type':'multipart/form-data',
        //     },
        // })
        // .then((response)=>{
        //     return response.json()
        // })
        // .then((response)=>{
        //     this.setState({uploaded:true})
        //     console.log(response)
        // })

       

    }
    
    
    render(){
      
        const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';
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
                            <Para>{this.state.errmessage}</Para>
                        </LoaderContainer>
                        :
                        null
                    }
                    
                    {this.state.isLoading?
                        <LoaderContainer>
                            <LoaderImage src="./MusicSymbol.png" />
                            <Para>Loading</Para>
                        </LoaderContainer>
                        :
                        null
                    }


                    <ContentContainer>
                        
                            {!this.state.uploaded?
                                <div style={{position:'absolute',display:'flex',flexDirection:'column',width:'100%',alignItems:'center',zIndex:this.state.uploaded?2:3}}>
                                    <Para>
                                        {this.state.SelectedFileName}
                                    </Para>
                                    <UploadButton onClick={()=>{this.FileBrowser()}} style={{marginTop:30}}>
                                        <input onInput={(e)=>{
                                            this.SetFile(e)
                                            }} type="file" accept="audio/wav" id="fileInput"  hidden/>
                                        Select
                                    </UploadButton>
                                    
                                    <UploadButton onClick={()=>{
                                        this.UploadFile();
                                        // this.setState({uploaded:true})
                                        // const track = document.querySelector('#track');

                                        // this.waveform.load(track);


                                    }} style={{marginTop:30}}>
                                        Upload
                                    </UploadButton>
                                </div>
                                :
                                null
                            }
                        
                            <WaveformContianer style={{zIndex:this.state.uploaded?3:2,visibility:this.state.uploaded?'visible':'hidden'}}>
                                <Wave id="waveform" />
                                <audio id="track" src={url} />  
                                <ButtonContainer>
                                    {this.state.playing?
                                        <StopButton onClick={()=>{
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




                            {this.state.uploaded?
                                <ResultContainer>
                                    <Title>SINGER MATCHED</Title>
                                    <div style={{height:5,backgroundColor:'white',width:'30%',marginLeft:40}} />

                                    <SingerContainer>

                                        <div style={{display:'flex',alignItems:'center',marginTop:10}}>
                                            <Image src="https://static.toiimg.com/photo/msid-71551195/71551195.jpg?80178" />
                                            <NameContainer>
                                                <SingerName>Kishore Kumar</SingerName>
                                                <MatchPercentage>82%</MatchPercentage>
                                            </NameContainer>
                                        </div>

                                        <div style={{display:'flex',alignItems:'center',marginTop:10}}>
                                            <Image src="https://static.toiimg.com/thumb/56933883.cms?width=170&height=240" />
                                            <NameContainer>
                                                <SingerName>Lata Mangeshkar</SingerName>
                                                <MatchPercentage>12%</MatchPercentage>
                                            </NameContainer>
                                        </div>

                                    </SingerContainer>

                                </ResultContainer>
                                :
                                null
                            }

                            
                    </ContentContainer>
                </Container>            
            </Canvas>
        )
    }
}

export default NeuralSingerIdentifier
