import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import NeuralLyricsGeneratorPage from './NeuralLyricsGeneratorPage';
import NeuralPianoPage from './NeuralPianoPage';
import NeuralSingerIdentifierPage from './NeuralSingerIdentifierPage';
import NeuralSongGeneratorPage from './NeuralSongGeneratorPage';
import Selector from './Selector';



export default class Navigator extends Component {
    // constructor(props){
    //     super(props)

    // }

    render(){
        return(
            <Switch>    
                <Route exact path='/' component={Home} />
                <Route exact path='/selector' component={Selector} />
                <Route exact path='/NeuralPiano' component={NeuralPianoPage} />
                <Route exact path='/NeuralSingerIdentifier' component={NeuralSingerIdentifierPage} />
                <Route exact path='/NeuralLyricsGenerator' component={NeuralLyricsGeneratorPage} />
                <Route exact path='/NeuralSongGenerator' component={NeuralSongGeneratorPage} />
                <Redirect to='/'/>
            </Switch>
        )
    }
}
