import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Picker, Icon, Button, Radio, ListItem, Container, Text, Header, Content, Item, Input, Label, Body, Right, Title, Subtitle, Left } from 'native-base';
class UserForm extends Component {

    static navigationOptions = {
        header: null
    }

    constructor() {
        super()
        this.state = {
            selected: 'Johar'
        }
    }

    goBack() {
        this.props.navigation.pop()
    }

    render() {

        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Icon name="arrow-back" style={{ color: 'white' }} onPress={this.goBack.bind(this)} />
                    </Left>
                    <Body style={styles.header}>
                        <Title>Baghbaan</Title>
                        <Subtitle>Request Service</Subtitle>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Item floatingLabel style={styles.item}>
                        <Label>Username</Label>
                        <Input />
                    </Item>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <ListItem selected={false} >
                            <Text>Male</Text>
                            <Radio
                                // color={"#f0ad4e"}
                                // selectedColor={"#5cb85c"}
                                // selected={false}
                                style={styles.radio}
                            />
                        </ListItem>
                        <ListItem selected={false} >
                            <Text>Female</Text>
                            <Radio
                                // color={"#f0ad4e"}
                                // selectedColor={"#5cb85c"}
                                // selected={true}
                                style={styles.radio}
                            />
                        </ListItem>
                    </View>


                    <Item floatingLabel style={styles.item}>
                        <Label>Residential Address</Label>
                        <Input />
                    </Item>
                    <Picker
                        mode="dropdown"
                        // iosHeader="Select your SIM"
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={styles.picker}
                        selectedValue={this.state.selected}
                    // onValueChange={this.onValueChange.bind(this)}
                    >
                        <Picker.Item label="Select Area" value="key0" />
                        <Picker.Item label="Gulshan" value="key0" />
                        <Picker.Item label="FB Area" value="key1" />
                        <Picker.Item label="Nazimabad" value="key2" />
                    </Picker>

                    <Item floatingLabel style={styles.item}>
                        <Label>Email</Label>
                        <Input keyboardType='email' />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Contact no</Label>
                        <Input keyboardType='numeric' />
                    </Item>

                    <Item floatingLabel style={styles.item}>
                        <Label>Instructions</Label>
                        <Input />
                    </Item>



                    <Button block success style={styles.button}>
                        <Text>Submit</Text>
                    </Button>







                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#69F0AE',
    },
    header: {
        // marginLeft: 12,
    },
    item: {
        marginLeft: 15,
        marginRight: 15,

    },
    button: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
    },
    radio: {
        marginLeft: 12,
    },
    picker: {
        width: undefined,
        marginLeft: 12,
        marginTop: 12,

    }
});

export default UserForm;