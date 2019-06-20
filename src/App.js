import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
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
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}
