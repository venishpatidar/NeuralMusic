import React from 'react'
import { NEURAL_LYRICS_GENERATOR_SERVER_ADDR } from '../../utils'
import Canvas from '../Canvas'
import CircularButton from '../CircularButton'
import { Container,HeaderContainer,Header, ContentContainer,TextContainer, TextAreaContainer, GenrateButton, GeneratedTextContainer, GeneratedText, LoaderImage, LoaderContainer, Para} from './NeuralLyricsGeneratorComponent'

const TextSample = 'Lorem ipsum dolor sit amet , consectetur adipiscing elit. Curabitur sed lectus a lectus euismod rhoncus. Cras ornare fermentum lacus. Phasellus laoreet commodo semper. Cras volutpat, nunc non ullamcorper suscipit, ipsum dui ultricies sapien, quis cursus urna libero rhoncus augue. Aliquam semper at tortor sit amet consequat. Vestibulum elit erat, pulvinar ut tristique eu, sollicitudin sed risus. Cras ultricies metus ac pulvinar pellentesque.'


class NeuralLyricsGenerator extends React.Component{

    constructor(props){
        super(props);
        
        this.state ={
            isLoading:false,
            generateLyrics:false,
            keywords:'',
            generatedLyrics:'',
            errmessage:'',
            err:false,
        }   

    }

    serverGenerateLyrics(){
        this.setState({isLoading:true})
        fetch(NEURAL_LYRICS_GENERATOR_SERVER_ADDR,{
            method:"POST",
            body:JSON.stringify(this.state.keywords),
        })
        .then((response)=>{
            if(response.status===200){
                return response.json()
            }
            else{
                var error = new Error('Error on server side ERROR STATUS ' + response.status + ': ' + response.statusText+' Please refresh or press F5');
                error.response = response;
                throw error;

            }
        },error=>{throw error})
        .then((response)=>{
            this.setState({isLoading:false,keywords:'',generatedLyrics:response.lyrics,generateLyrics:true})
        })
        .catch((error)=>{
            if(error.message==="Failed to fetch"){
                this.setState({isLoading:false,err:true,errmessage:"UH OH.... SERVER DOWN"})
            }
            else{
                this.setState({isLoading:false,err:true,errmessage:error.message})
            }
        })
    }
    

    render(){
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
                        {!this.state.generateLyrics?    
                            <TextContainer>
                                <TextAreaContainer value={this.state.keywords} placeholder="Input Keywords" onInput={(e)=>{this.setState({keywords:e.target.value})}} />

                                <GenrateButton onClick={()=>{this.serverGenerateLyrics()}} style={{marginTop:20}}>Generate</GenrateButton>
                            </TextContainer>
                            :
                            <GeneratedTextContainer>
                                <GeneratedText>
                                    {this.state.generatedLyrics}
                                </GeneratedText>
                                <GenrateButton onClick={()=>{
                                    this.setState({generateLyrics:false}) 
                                    // this.serverGenerateLyrics()
                                    }} style={{marginTop:20}}>Reset</GenrateButton>

                            </GeneratedTextContainer>
                        }
                    </ContentContainer>
                
                
                
                </Container>    
            </Canvas>
        )
    }
}

export default NeuralLyricsGenerator
