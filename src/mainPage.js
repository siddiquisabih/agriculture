//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Button, Text, Body, Right, Title, Subtitle, Left } from 'native-base';
// create a component
class MainPage extends Component {

    static navigationOptions = {
        header: null
    }

    gotoForm() { 
        this.props.navigation.navigate('UserFormRoute')
    }


    render() {
        return (

            <Container >
                <Header>
                    <Body style={styles.header}>
                        <Title>Baghbaan</Title>
                    </Body>
                    <Right />
                </Header>
                <Content >
                    <View style={styles.container}>
                        <Button full success style={styles.button} onPress={this.gotoForm.bind(this)}>
                            <Text>Services Form</Text>
                        </Button>
                        <Button full dark style={styles.button}>
                            <Text>Our Community</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#2c3e50',
        height: Dimensions.get('window').height
    },
    header: {
        marginLeft: 12,
    },
    button: {
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 15,
    }

});

//make this component available to the app
export default MainPage;
