import React from 'react';
import { View, ScrollView, Platform, Text } from 'react-native';
import styles from './weatherPageStyles';

import fetchWeather from '../api';

export default class WeatherPage extends React.Component {
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.topContent}>
                    <Text style={styles.cityName}>BANGALORE</Text>
                </View>
                <Text style={styles.introText}> Hello I'm the weather page.</Text>
                <Text style={styles.introText}> {this.props.latitude}</Text>
                <Text style={styles.introText}> {this.props.longitutde}</Text>
                <Text style={styles.icon}>&#xf001;</Text>
            </View>
        )
    }
}