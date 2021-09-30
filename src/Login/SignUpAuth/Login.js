import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from 'react-native'


function Login(){
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#181818' }}>
        <View >
            <Text style={{ fontSize: 25, color: '#d2a56e', marginTop: 100 }}>LOGIN</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: 'red', width: '80%', marginVertical: 20, backgroundColor: 'white' }}>
            <TextInput  style={{ fontSize: 15, padding: 15, width: '80%' }} placeholder='Enter Email' />
        </View>

        <View style={{ borderWidth: 1, borderColor: 'red', width: '80%', marginBottom: 20, backgroundColor: 'white' }}>
            <TextInput style={{ fontSize: 15, padding: 15, width: '80%' }} placeholder='Enter Password' />
        </View>


        <View style={{ width: "80%" }}>
            <TouchableOpacity style={{
                backgroundColor: '#d2a56e', borderRadius: 20, padding: 10, justifyContent: 'center'
            }}><Text style={{ fontSize: 20, textAlign: 'center', padding: 10, color: 'white', }}>Login</Text></TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ color: "white" }}>Do You Have Account ?</Text>
            </View>
            <View>
                <TouchableOpacity style={{}}><Text style={{ color: 'skyblue', padding: 10 }}>SignUp Now</Text></TouchableOpacity>
            </View>
        </View>




    </View>
    )
}

export default Login;