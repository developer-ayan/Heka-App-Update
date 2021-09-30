import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from "react";
import auth from '@react-native-firebase/auth';


const SignUp = ({navigation}) => {

    const [ email , setEmail  ] = useState('')
    const [password,setPassword] = useState("");
    
    auth()
            .createUserWithEmailAndPassword(email,password)
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }
          
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
          
              console.error(error);
            });
        

    return (

        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#181818' }}>
            <View >
                <Text style={{ fontSize: 25, color: '#d2a56e', marginTop: 100 , fontWeight : 'bold' }}>Sign Up</Text>
            </View>



            <View style={{ width: '80%', marginVertical: 20, backgroundColor: 'white' , borderRadius : 20  }}>
                <TextInput style={{ fontSize: 15, padding: 20, width: '80%', fontWeight : 'bold' }} placeholder='Enter Username' />
            </View>

            <View style={{ width: '80%', marginBottom: 20, backgroundColor: 'white'  , borderRadius : 20 }}>
                <TextInput onChangeText={(text)=>setEmail(text)}keyboardType={"email-address"}  style={{ fontSize: 15, padding: 20, width: '80%', fontWeight : 'bold' }} placeholder='Enter Email' />
            </View>

            <View style={{ width: '80%', marginBottom: 20, backgroundColor: 'white' , borderRadius : 20 }}>
                <TextInput onChangeText={(password)=>setPassword(password)} secureTextEntry={true} style={{ fontSize: 15, padding: 20, width: '80%' , fontWeight : 'bold'}} placeholder='Enter Password' />
            </View>


            <View style={{ width: "80%" }}>
                <TouchableOpacity style={{
                    backgroundColor: '#d2a56e', borderRadius: 20, padding: 10, justifyContent: 'center'
                }}><Text style={{ fontSize: 20, textAlign: 'center', padding: 10, color: 'white', fontWeight : 'bold' }}>Sign Up</Text></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ padding: 10 }}>
                    <Text style={{ color: "white" }}>Do You Have Account</Text>
                </View>
                <View>
                    <TouchableOpacity onPress = {() => navigation.navigate('Login')} style={{}}><Text style={{ color: 'skyblue', padding: 10 , fontWeight : 'bold' }}>Login</Text></TouchableOpacity>
                </View>
            </View>




        </View>

    )
}

export default SignUp;