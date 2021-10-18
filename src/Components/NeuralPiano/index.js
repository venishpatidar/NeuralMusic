import React from 'react'
import Canvas from '../Canvas'
import { Container, Header, HeaderContainer, InstrumentListContainer, InstrumentSelectionContainer, ListItems, LoaderContainer, LoaderImage, Para, PianoContainer } from './NeuralPianoComponent'
import CircularButton from '../CircularButton'
import {NEURAL_PIANO_SERVER_ADDR} from './../../utils';
import { BsArrowUp } from 'react-icons/bs';

const INSTRUMENT_LIST = [
    "accordion",
    "acoustic_bass",
    "acoustic_grand_piano",
    "acoustic_guitar_nylon",
    "acoustic_guitar_steel",
    "agogo",
    "alto_sax",
    "applause",
    "bagpipe",
    "banjo",
    "baritone_sax",
    "bassoon",
    "bird_tweet",
    "blown_bottle",
    "brass_section",
    "breath_noise",
    "bright_acoustic_piano",
    "celesta",
    "cello",
    "choir_aahs",
    "church_organ",
    "clarinet",
    "clavinet",
    "contrabass",
    "distortion_guitar",
    "drawbar_organ",
    "dulcimer",
    "electric_bass_finger",
    "electric_bass_pick",
    "electric_grand_piano",
    "electric_guitar_clean",
    "electric_guitar_jazz",
    "electric_guitar_muted",
    "electric_piano_1",
    "electric_piano_2",
    "english_horn",
    "fiddle",
    "flute",
    "french_horn",
    "fretless_bass",
    "fx_1_rain",
    "fx_2_soundtrack",
    "fx_3_crystal",
    "fx_4_atmosphere",
    "fx_5_brightness",
    "fx_6_goblins",
    "fx_7_echoes",
    "fx_8_scifi",
    "glockenspiel",
    "guitar_fret_noise",
    "guitar_harmonics",
    "gunshot",
    "harmonica",
    "harpsichord",
    "helicopter",
    "honkytonk_piano",
    "kalimba",
    "koto",
    "lead_1_square",
    "lead_2_sawtooth",
    "lead_3_calliope",
    "lead_4_chiff",
    "lead_5_charang",
    "lead_6_voice",
    "lead_7_fifths",
    "lead_8_bass__lead",
    "marimba",
    "melodic_tom",
    "music_box",
    "muted_trumpet",
    "oboe",
    "ocarina",
    "orchestra_hit",
    "orchestral_harp",
    "overdriven_guitar",
    "pad_1_new_age",
    "pad_2_warm",
    "pad_3_polysynth",
    "pad_4_choir",
    "pad_5_bowed",
    "pad_6_metallic",
    "pad_7_halo",
    "pad_8_sweep",
    "pan_flute",
    "percussive_organ",
    "percussion",
    "piccolo",
    "pizzicato_strings",
    "recorder",
    "reed_organ",
    "reverse_cymbal",
    "rock_organ",
    "seashore",
    "shakuhachi",
    "shamisen",
    "shanai",
    "sitar",
    "slap_bass_1",
    "slap_bass_2",
    "soprano_sax",
    "steel_drums",
    "string_ensemble_1",
    "string_ensemble_2",
    "synth_bass_1",
    "synth_bass_2",
    "synth_brass_1",
    "synth_brass_2",
    "synth_choir",
    "synth_drum",
    "synth_strings_1",
    "synth_strings_2",
    "taiko_drum",
    "tango_accordion",
    "telephone_ring",
    "tenor_sax",
    "timpani",
    "tinkle_bell",
    "tremolo_strings",
    "trombone",
    "trumpet",
    "tuba",
    "tubular_bells",
    "vibraphone",
    "viola",
    "violin",
    "voice_oohs",
    "whistle",
    "woodblock",
    "xylophone"
]

function CreateKeyTrail(elementId,height=25,color="#00bfff"){
    // Creating KeyTrail 
    
    try{
        let keytrail = document.createElement('div')
        let el1 = document.getElementById(elementId);

        
        // el1.id = elementId+"keytrail"

        const {width,left,top } = el1.getBoundingClientRect()

        //  Assigining Custome class ; located at index.css
        keytrail.className = "pool"
        
        //  Definig positon and width
        keytrail.style="left:"+left+"px;width:"+width+"px;height:"+height+"px;top:"+top+"px;background-color:"+color+';'
        
        // Adding as child to Piano Container to get render on screen
        document.getElementById('pianoContainer').appendChild(keytrail)
        
        // timeout to remove keytrail after 4.5s
        setTimeout(()=>{
            keytrail.remove();
        },5000)
    }
    catch{
        
    }
}

// function SetHeightOfTrail(elementId,height=25){
//     let el1 = document.getElementById(elementId);
//     el1.setAttribute('style', 'background-color:red;')
    
// }
function PianoFirstHalf(props) {
    const {keys,Piano,ac,addToKeyHitory} = props 

    return (
        <svg
        id="prefix__Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 75.1 87.02"
        width="100%" height="100%"
        {...props}
      >
        <defs>
          <style>
            {
                `
                .prefix__cls-1,.prefix__cls-2{
                    fill:#333;stroke:#fff;
                    stroke-miterlimit:10
                }
                .prefix__cls-2{
                    fill:none
                }
                .KeyStrokeHover:hover{
                    cursor: pointer;
                    fill:rgba(150,150,150,1);
                }
                `
            }
          </style>
        </defs>
        
        <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M612.23 479.49h-16.06v86h23v-34h-6.95c.04-17.12-.02-34.9.01-52z"
            transform="translate(-595.67 -478.99)"
            
            // Id to identify this element in dom and get bounding rectangle.
            // index is used to correctly and uniquly identify element as this will get rendered thorugh mapping.
            id={keys[0]}

            
            //As soon as cursor left render a trail at positon, position will be given from bounding rectangle. 
            onClickCapture={()=>{
                
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                })
                addToKeyHitory(keys[0])
                // SetHeightOfTrail("pk1at"+index+"keytrail",1000)
                // Creating KeyTrail
                // CreateKeyTrail("pk1at"+index);

            }}
            onMouseDownCapture={()=>{
                Piano.then((piano)=> {
                    piano.play(keys[0])

                  })
                CreateKeyTrail(keys[0]);
            }}
        />
        <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M629.08 479.49v52h-7.91v34h24.4v-34h-8.22v-52z"
            transform="translate(-595.67 -478.99)"
            id={keys[2]}
            onClickCapture={()=>{
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                    addToKeyHitory(keys[2])

                  })

                  addToKeyHitory(keys[2])
                  
                  
                }}
                onMouseDownCapture={()=>{
                    // console.log(keys[2])
                    
                    Piano.then((piano)=> {
                        piano.play(keys[2])
                    })
                    CreateKeyTrail(keys[2]);
                }}
        />

        <path className="prefix__cls-2 " d="M16.56.5h41.93" />

        <path className="KeyStrokeHover"  d="M16.56 1.01h16.85v51.46H16.56z" 
                
                
                id = {keys[1]}
                onClickCapture={()=>{
                    Piano.then((piano)=> {
                        piano.stop(ac.currentTime + 0.5)
                    })
                    
                    addToKeyHitory(keys[1])
                    
                }}
                
                onMouseDownCapture={()=>{
                    console.log(keys[1])
                    Piano.then((piano)=> {
                        piano.play(keys[1])
                    })
                    CreateKeyTrail(keys[1]);
                }}
            />

        
        <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M654.2 479.5h16.06v86h-23v-34h7c-.09-17.13-.03-34.91-.06-52z"
            transform="translate(-595.67 -478.99)"
            id = {keys[4]}
            onClickCapture={()=>{
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                })
                addToKeyHitory(keys[4])
    
                
            }}
            
            
            onMouseDownCapture={()=>{
                // console.log(keys[1])
                Piano.then((piano)=> {
                    piano.play(keys[4])
                })
                CreateKeyTrail(keys[4]);
            }}
        />

        <path className="KeyStrokeHover" d="M41.68 1.01h16.85v51.46H41.68z" 
            id = {keys[3]}

            onClickCapture={()=>{
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                })
                addToKeyHitory(keys[3])

                
            }}
            onMouseDownCapture={()=>{
                Piano.then((piano)=> {
                    piano.play(keys[3])
                })
                CreateKeyTrail(keys[3]);
            }}
        />
      </svg>
    )
}


  function PianoSecondHalf(props) {
    const {keys,Piano,addToKeyHitory,ac} = props 

    return (
        <svg
          id="prefix__Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 101.05 87.02"
          width="100%" height="100%"
          {...props}
        >
          <defs>
            <style>
            {
                `
                .prefix__cls-1,.prefix__cls-2{
                    fill:#333;stroke:#fff;
                    stroke-miterlimit:10
                }
                .prefix__cls-2{
                    fill:none
                }
                .KeyStrokeHover:hover{
                    cursor: pointer;
                    fill:rgba(150,150,150,1);
                }
                `
            }
            </style>
          </defs>
          
          <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M612.23 479.49h-16.06v86h23v-34h-6.95c.04-17.12-.02-34.9.01-52z"
            transform="translate(-595.67 -478.99)"

            id = {keys[0]}
            
            onClickCapture={()=>{
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                  })
                  addToKeyHitory(keys[0])

                  
                }}
                
            onMouseDownCapture={()=>{
                // console.log(keys[0])
                Piano.then((piano)=>{
                    piano.play(keys[0])
                })
                CreateKeyTrail(keys[0]);

            }}
          />

          <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M629.08 479.5v52h-7.91v34h24.4v-34h-8.22v-52z"
            transform="translate(-595.67 -478.99)"

            id = {keys[2]}

            onClickCapture={()=>{
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                  })
                  addToKeyHitory(keys[2])

                  
                  
                }}
                
            onMouseDownCapture={()=>{
                // console.log(keys[2])
                Piano.then((piano)=>{
                    piano.play(keys[2])
                })
                CreateKeyTrail(keys[2]);
            }}
          />


          <path className="prefix__cls-2 " d="M17.05.5H84.5" />
          
          <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M655.08 479.5v52h-7.91v34h24.4v-34h-8.22v-52z"
            transform="translate(-595.67 -478.99)"
            
            id = {keys[4]}
            
            onClickCapture={()=>{
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                  })
                  addToKeyHitory(keys[4])
                  
                  
                }}
            onMouseDownCapture={()=>{
                // console.log(keys[4])
                Piano.then((piano)=>{
                    piano.play(keys[4])
                })
                CreateKeyTrail(keys[4]);
            }}
          />
          
          <path className="KeyStrokeHover" d="M16.56 1.01h16.85v51.46H16.56z"
            id = {keys[1]}
           
            onClickCapture={()=>{
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                })
                addToKeyHitory(keys[1])
                
                
            }}
            
            onMouseDownCapture={()=>{
                // console.log(keys[1])
                Piano.then((piano)=>{
                    piano.play(keys[1])
                })
                CreateKeyTrail(keys[1]);
            }}
            />
          <path className="KeyStrokeHover" d="M41.68 1.01h17.73v51.46H41.68z" 
            id = {keys[3]}
            
            onClickCapture={()=>{
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                  })
                addToKeyHitory(keys[3])
                  
                  
                }}
            onMouseDownCapture={()=>{
                // console.log(keys[3])
                Piano.then((piano)=>{
                    piano.play(keys[3])
                    CreateKeyTrail(keys[3]);
                })
            }}
            />
          
          
          <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M680.16 479.5h16.06v86h-23v-34h6.95c-.04-17.13.02-34.91-.01-52z"
            transform="translate(-595.67 -478.99)"

            id = {keys[6]}

            onClickCapture={()=>{
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                  })

                  addToKeyHitory(keys[6])
            
            }}
            
            onMouseDownCapture={()=>{
                // console.log(keys[6])
                Piano.then((piano)=>{
                    piano.play(keys[6])
                    CreateKeyTrail(keys[6]);
                })
            }}
          />
          <path className="KeyStrokeHover" d="M67.68 1.01h16.81v51.46H67.68z"
            id = {keys[5]}

            onClickCapture={()=>{
                Piano.then((piano)=> {
                    piano.stop(ac.currentTime + 0.5)
                  })
                  addToKeyHitory(keys[5])

                  
                }}
                
            onMouseDownCapture={()=>{
                // console.log(keys[5])
                Piano.then((piano)=>{
                    piano.play(keys[5])
                    CreateKeyTrail(keys[5]);
                })
            }}
             />
        
        
        </svg>
      )
}
    
const PianoKeys = [
   
   
    {firstHalf:true,keys:['C2','C#2','D2','D#2','E2']},
    {firstHalf:false,keys:['F2','F#2','G2','G#2','A2','A#2','B2']},

    {firstHalf:true,keys:['C3','C#3','D3','D#3','E3']},
    {firstHalf:false,keys:['F3','F#3','G3','G#3','A3','A#3','B3']},

    {firstHalf:true,keys:['C4','C#4','D4','D#4','E4']},
    {firstHalf:false,keys:['F4','F#4','G4','G#4','A4','A#4','B4']},

    {firstHalf:true,keys:['C5','C#5','D5','D#5','E5']},
    {firstHalf:false,keys:['F5','F#5','G5','G#5','A5','A#5','B5']},

    {firstHalf:true,keys:['C6','C#6','D6','D#6','E6']},
    {firstHalf:false,keys:['F6','F#6','G6','G#6','A6','A#6','B6']},

    {firstHalf:true,keys:['C7','C#7','D7','D#7','E7']},
    {firstHalf:false,keys:['F7','F#7','G7','G#7','A7','A#7','B7']},
 
    
]

const KeyboardOcatave = 4;

const KeyboardToToneMap = {
    a:'C'+KeyboardOcatave,
    s:'D'+KeyboardOcatave,
    d:'E'+KeyboardOcatave,
    f:'F'+KeyboardOcatave,
    g:'G'+KeyboardOcatave,
    h:'A'+KeyboardOcatave,
    j:'B'+KeyboardOcatave,
    w:'C#'+KeyboardOcatave,
    e:'D#'+KeyboardOcatave,
    t:'F#'+KeyboardOcatave,
    y:'G#'+KeyboardOcatave,
    u:'A#'+KeyboardOcatave,
}






export default class NeuralPiano extends React.Component{
    constructor(props){
        super(props);
        this.Soundfont = require('soundfont-player')

        this.ac = new (window.AudioContext || window.webkitAudioContext)();
        this.Piano = this.Soundfont.instrument(this.ac, 'acoustic_grand_piano')
        this.listenr = (e)=>{
            try{
                if(KeyboardToToneMap[e.key.toLowerCase()]){
                    this.Piano.then((piano)=>{
                        piano.play(KeyboardToToneMap[e.key.toLowerCase()])
                        CreateKeyTrail(KeyboardToToneMap[e.key.toLowerCase()]);
                    })
                }
            }
            catch{
                // Not Mapped Key
            }
        }
        document.addEventListener('keydown',this.listenr);
        
        this.state={
            loaded:false,
            timeGap:2000,
            keyHistory:[],
            err:false,
            errMessage:'',
            showInstrumentList:false,
            selectedInstrument:'piano'
        }
        this.addToKeyHitory = this.addToKeyHitory.bind(this)
        this.historyTimeOut=null;
        this.start = null;
        this.averageTime=0;
        this.averageCount = 0;
        this.waitTime = 0;

        // Intial call to boot up neural network
        let obj = {'keys':['C4']}
        
        fetch(NEURAL_PIANO_SERVER_ADDR,{
            method:"POST",
            body:JSON.stringify(obj),
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
            // PREDICT = response.predict
            console.log("Neural Network Booted up")
            this.setState({loaded:true})
        })
        .catch((error)=>{
            if(error.message==="Failed to fetch"){
                this.setState({err:true,loaded:true,errMessage:"UH OH.... SERVER DOWN"})
            }
            else{
                this.setState({err:true,loaded:true,errMessage:error.message})
            }
        })

    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.listenr)
    }

    addToKeyHitory(key){
        clearTimeout(this.historyTimeOut); 
        let temp = this.state.keyHistory;
        temp.push(key);
        this.setState({keyHistory:temp});
        let endTime;

        
        if(this.averageCount===0){
            this.averageCount+=1;
        }
        else{
            endTime = new Date()-this.start;
            this.averageTime=this.averageTime+endTime
          

            this.averageCount+=1;
        }

        // console.log('wait = ')
        // console.log(this.averageTime/this.averageCount);
        // console.log('average time = ')
        // console.log(this.averageTime);

        // console.log('average count = ')
        // console.log(this.averageCount);

        this.waitTime = this.averageTime/this.averageCount
        
        this.start = new Date();
        this.historyTimeOut = setTimeout(async ()=>{
            // Server call back
            // server response = ['F#4', 'F5', 'F5', 'F5', 'F#4', 'F5', 'F5', 'G#4', 'F5', 'F4']
            // let a = ['F#4', 'F5', 'F5', 'F5', 'F#4', 'F5', 'F5', 'G#4', 'F5', 'F4']
            let obj = {
                'keys':this.state.keyHistory,
            }
            let PREDICT;
            await fetch(NEURAL_PIANO_SERVER_ADDR,{
                method:"POST",
                body:JSON.stringify(obj),
               
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
                PREDICT = response.predict
            })
            .catch((error)=>{this.setState({err:true,loaded:true,errMessage:error.message})})

            
            
            function wait(milleseconds) {
                return new Promise(resolve => setTimeout(resolve, milleseconds))
            }

            var pianoContainer = document.getElementById('pianoContainer');
            this.Piano.then(async (piano)=>{
                pianoContainer.style.background ='radial-gradient(farthest-corner at 50% -500px, rgba(255, 168,18,1)  ,transparent , transparent)';
                for(let i in PREDICT){
                    piano.play(PREDICT[i])

                    try{
                        CreateKeyTrail(PREDICT[i],null,'#ffa812');
                    }
                    catch{
                        console.log(i)
                    }
                   
                    piano.stop(this.ac.currentTime + 0.5)

                    await wait(this.waitTime===0?500+Math.floor(Math.random() * 100):this.waitTime+Math.floor(Math.random() * 100));
                   
                }
            })
            .then(()=>{
                setTimeout(()=>{
                    pianoContainer.style.background = 'radial-gradient(farthest-corner at 50% -500px, rgba(0, 191, 255, 1)  ,transparent , transparent)'
                },5000)
            })
          
            console.log(this.state.keyHistory)
            this.setState({keyHistory:[]})
            this.averageTime=0;
            this.averageCount = 0
        },this.state.timeGap)
    }

    

    render(){


        return(
            <Canvas>
                <Container>
                    {this.state.err?
                        <LoaderContainer>
                            <div className="block" style={{width:"50%",height:"50%",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <Para>{this.state.errMessage}</Para>
                            </div>
                        </LoaderContainer>
                        :
                        null
                    }
                    
                    
                    {this.state.loaded?
                        null
                        :
                        <LoaderContainer>
                            <LoaderImage src="./MusicSymbol.png" />
                            <Para>Loading</Para>
                        </LoaderContainer>
                    }



                    <HeaderContainer>
                    <Header>
                        <CircularButton to="/selector"  backArrow={true}/>
                        <CircularButton questionMark={true}/>
                    </Header>
                    </HeaderContainer>
                    <PianoContainer  style={{filter:!this.state.loaded?'blur(20px)':''}} id="pianoContainer">

                        <InstrumentSelectionContainer id="InstrumentSelectionContainer" >
                            {this.state.showInstrumentList?
                            <InstrumentListContainer  >
                                {INSTRUMENT_LIST.map((data,index)=>{
                                    return(
                                        <ListItems onClick={()=>{
                                            this.Piano = this.Soundfont.instrument(this.ac, data)
                                            var cont = document.getElementById('InstrumentSelectionContainer');
                                            cont.style.height = '50px'
                                            this.setState({showInstrumentList:false,selectedInstrument:data});
                
                                        }} index={index%2}>
                                            <Para style={{width:'100%',textAlign:'center',}}>{data.replace(/_/g,' ')}</Para>
                                        </ListItems>
                                    )
                                })}
                            </InstrumentListContainer>
                            :
                            <div onClick={()=>{
                                var cont = document.getElementById('InstrumentSelectionContainer')
                                cont.style.height = '50%'
                                this.setState({showInstrumentList:true})
                                }} style={{width:'100%',display:'flex',alignItems:'center'}}>
                                <Para style={{width:'100%',textAlign:'center',}}>{this.state.selectedInstrument}</Para>
                            </div>
                            }
                        </InstrumentSelectionContainer>

                        <div style={{display:'flex',position:'absolute',zIndex:10,justifyContent:'center',height:"20%"}} >
                            {PianoKeys.map((data,index)=>{
                                return(
                                    <div key={index}>
                                        {data.firstHalf?
                                            <PianoFirstHalf addToKeyHitory={this.addToKeyHitory}   Piano={this.Piano} ac={this.ac}  keys={data.keys} />
                                            :
                                            <PianoSecondHalf addToKeyHitory={this.addToKeyHitory}  Piano={this.Piano} ac={this.ac} keys={data.keys} />
                                        }
                                    </div>
                                )
                            })}
                            
                        </div>
                    </PianoContainer>
                </Container>
            </Canvas>
        )
    }



}