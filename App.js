/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    View
  } from 'react-native';
import WeatherPage from './src/WeatherPage/weatherPage';

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' +
//         'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            cityname: '',
          };
    }
    componentDidMount(){
        console.log('hello');
        const options= {
            enableHighAccuracy: true, timeout: 20000, maximumAge: 10000
        }
        //get current location and cityname
        try{
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                  this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                  });
                },
                (error) => this.setState({ error: error.message }),
                options
              );
        }
        catch (e) {
            console.log(e) // getCurrentPosition is not a function
         }
    }
    render() {
        return ( 
        <View style = { styles.container } >
            <WeatherPage latitude={this.state.latitude} longitude={this.state.longitude}/>
            {/* <Text style = { styles.welcome } >
            Welcome to the weather app. </Text> 
            <Text style = { styles.instructions } >To get started, edit App.js </Text> 
            <Text style = { styles.instructions } > { instructions } </Text>  */}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        fontFamily:"circular-book"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 20,
        fontFamily:"circular-book"
    },
});