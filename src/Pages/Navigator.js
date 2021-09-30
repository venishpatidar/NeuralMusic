import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import NeuralPianoPage from './NeuralPianoPage';
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
                <Redirect to='/'/>
            </Switch>
        )
    }
}
