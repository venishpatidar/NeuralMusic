import React from 'react'
import Canvas from '../Canvas'
import { Container, Header, HeaderContainer, PianoContainer } from './NeuralPianoComponent'
import CircularButton from '../CircularButton'

function PianoFirstHalf(props) {
    const {keys,Soundfont,ac} = props 
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
            onMouseDown={()=>{
                Soundfont.instrument(ac, 'acoustic_grand_piano').then(function (piano) {
                    piano.play(keys[0])
                  })
            }}
        />
        <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M629.08 479.49v52h-7.91v34h24.4v-34h-8.22v-52z"
            transform="translate(-595.67 -478.99)"
            onMouseDown={()=>{
                console.log(keys[2])

                Soundfont.instrument(ac, 'acoustic_grand_piano').then(function (piano) {
                    piano.play(keys[2])
                  })
            }}
        />

        <path className="prefix__cls-2 " d="M16.56.5h41.93" />

        <path className="KeyStrokeHover"  d="M16.56 1.01h16.85v51.46H16.56z" 
                onMouseDown={()=>{
                    console.log(keys[1])
                    Soundfont.instrument(ac, 'acoustic_grand_piano').then(function (piano) {
                        piano.play(keys[1])
                      })
                }}
            />

        
        <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M654.2 479.5h16.06v86h-23v-34h7c-.09-17.13-.03-34.91-.06-52z"
            transform="translate(-595.67 -478.99)"
            onMouseDown={()=>{
                console.log(keys[1])
                Soundfont.instrument(ac, 'acoustic_grand_piano').then(function (piano) {
                    piano.play(keys[4])
                  })
            }}
        />

        <path className="KeyStrokeHover" d="M41.68 1.01h16.85v51.46H41.68z" 
            onMouseDown={()=>{
                console.log(keys[1])
                Soundfont.instrument(ac, 'acoustic_grand_piano').then(function (piano) {
                    piano.play(keys[3])
                  })
            }}
        />
      </svg>
    )
  }


  function PianoSecondHalf(props) {
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
          />

          <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M629.08 479.5v52h-7.91v34h24.4v-34h-8.22v-52z"
            transform="translate(-595.67 -478.99)"
          />


          <path className="prefix__cls-2 " d="M17.05.5H84.5" />
          
          <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M655.08 479.5v52h-7.91v34h24.4v-34h-8.22v-52z"
            transform="translate(-595.67 -478.99)"
          />
          
          <path className="KeyStrokeHover" d="M16.56 1.01h16.85v51.46H16.56z" />
          <path className="KeyStrokeHover" d="M41.68 1.01h17.73v51.46H41.68z" />
          
          
          <path
            className="prefix__cls-1 KeyStrokeHover"
            d="M680.16 479.5h16.06v86h-23v-34h6.95c-.04-17.13.02-34.91-.01-52z"
            transform="translate(-595.67 -478.99)"
          />
          <path className="KeyStrokeHover" d="M67.68 1.01h16.81v51.46H67.68z" />
        
        
        </svg>
      )
    }
    



const NeuralPiano = () => {
    var Soundfont = require('soundfont-player')
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    return (
        <Canvas>
            <Container>
                <HeaderContainer>
                <Header>
                    <CircularButton to="/selector"  backArrow={true}/>
                    <CircularButton questionMark={true}/>
                </Header>
                </HeaderContainer>
                <PianoContainer>
                    <div style={{display:'flex',justifyContent:'center',height:"20%"}}>
                        <div>
                            <PianoFirstHalf Soundfont={Soundfont} ac={ac} keys={['C4','C#4','D4','D#4','E4']} />
                        </div>
                        <div>
                            <PianoSecondHalf />
                        </div>
                        <div>
                            <PianoFirstHalf />
                        </div>
                        <div>
                            <PianoSecondHalf />
                        </div>
                        <div>
                            <PianoFirstHalf />
                        </div>
                        <div>
                            <PianoSecondHalf />
                        </div>
                        <div>
                            <PianoFirstHalf />
                        </div>
                        <div>
                            <PianoSecondHalf />
                        </div>
                        <div>
                            <PianoFirstHalf />
                        </div>
                        <div>
                            <PianoSecondHalf />
                        </div>
                       
                    </div>
                </PianoContainer>
            </Container>
        </Canvas>
    )
}

export default NeuralPiano
