import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';



export default class Navigator extends Component {
    // constructor(props){
    //     super(props)

    // }

    render(){
        return(
            <Switch>    
                <Route exact path='/' component={Home} />
                <Redirect to='/'/>
            </Switch>
        )
    }
}
