import { StyleSheet } from 'react-native';

// generate a random color code for the background
const colorCodes = ['#00BCD4','#03A9F4', '#009688', '#3F51B5',  '#2196F3', '#E91E63', '#F44336', '#4CAF50', '#FF9800'];
const index = Math.floor(Math.random() *7) + 1;
const colorCode = colorCodes[index];

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colorCode,
        flex: 1,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
    },    
    topContent: {
        justifyContent: 'center'
    },
    cityName: {
        fontSize: 40,
        fontFamily: 'circular-book',
        color: '#fff',
    },
    icon: {
        fontFamily: 'weather-icon',
        color: '#fff',
        fontSize: 30
    }
});

export default styles;
