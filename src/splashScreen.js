import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, } from 'react-native';

class SplashScreen extends Component {

    static navigationOptions = {
        header: null
    }


    componentWillMount() {
        this.timeOutScreen()
    }


    timeOutScreen() {
        setTimeout(() => {
            this.props.navigation.navigate('MainPageRoute')
        }, 3000)
    }



    render() {

        return (
            <View style={styles.mainView}>
                <Text style={styles.text}>{'baghbaan'.toUpperCase()}</Text>
                <ActivityIndicator color='green' />
            </View>
        );
    }
}
export default SplashScreen;

const styles = StyleSheet.create({
    mainView: {
        height: Dimensions.get('window').height,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E0E0E0'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    }
})