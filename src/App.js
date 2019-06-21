import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

    state = {
        loggedIn: null
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDt5xKdhosUdQl0CqWUwr7z5h2eBdZazPg',
            authDomain: 'authentication-f4865.firebaseapp.com',
            databaseURL: 'https://authentication-f4865.firebaseio.com',
            projectId: 'authentication-f4865',
            storageBucket: 'authentication-f4865.appspot.com',
            messagingSenderId: '815691498113',
            appId: '1:815691498113:web:90b3a1e8c5172e4e'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={styles.buttonContainerStyle}><Button onPress={() => firebase.auth().signOut()
                    }>Log Out</Button>
                    </View>
                )
            case false:
                return <LoginForm />
            default:
                return <View style={styles.spinnerStyle}><Spinner size={"large"} /></View>
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

const styles = {
    spinnerStyle: {
        alignSelf: 'center'
    },
    buttonContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}
