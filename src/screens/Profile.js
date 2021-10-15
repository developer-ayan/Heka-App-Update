// import React,{ useState } from "react";
// import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native';
// // import { Picker } from '@react-native-picker/picker';
// import { Auth } from "@firebase/auth";
// import Firebase from "../Login/SignUpAuth/Firebase";
// function Profile() {
//     // const [selectedLanguage, setSelectedLanguage] = useState();
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const register = ()=>{
//         Firebase().Auth()
//         .createUserWithEmailAndPassword(email,password)
//         .then(() => {
//           console.log('User account created & signed in!');
//         })
//         .catch(error => {
//           if (error.code === 'Auth/email-already-in-use') {
//             console.log('That email address is already in use!');
//           }
      
//           if (error.code === 'Auth/invalid-email') {
//             console.log('That email address is invalid!');
//           }
      
//           console.error(error);
//         });
//     }
//     return (


//         <View style={styles.container}>
//             <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>


//             </View>
//             <View style={{ width: 100, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text style={{ fontSize: 24, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', color: 'blue' }}>Register</Text>
//             </View>
//             <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
//                 <TextInput style={{ width: '80%', borderWidth: 1, borderColor: 'grey', borderRadius: 100, paddingLeft: 20, fontSize: 18, }} placeholder="Username " />
//             </View>
//             <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
//                 <TextInput onChangeText={(text)=>setEmail(text)}keyboardType={"email-address"} style={{ width: '80%', borderWidth: 1, borderColor: 'grey', borderRadius: 100, paddingLeft: 20, fontSize: 18, }} placeholder="Email " />
//             </View>
//             <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
//                 <TextInput  onChangeText={(text)=>setPassword(text)} secureTextEntry={true} style={{ width: '80%', borderWidth: 1, borderColor: 'grey', borderRadius: 100, paddingLeft: 20, fontSize: 18 }} placeholder="Password" />
//             </View>
//             <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
//                 <TouchableOpacity  onPress={register} style={[styles.btn, { alignItems: 'center', justifyContent: 'center', backgroundColor: '#008CBA', width: "80%", padding: 20, borderRadius: 100 }]}>
//                     <Text style={{ fontSize: 18, }}>Register</Text>
//                 </TouchableOpacity>
//             </View>
//             {/* <Picker
//                 selectedValue={selectedLanguage}
//                 onValueChange={(itemValue, itemIndex) =>
//                     setSelectedLanguage(itemValue)
//                 }>
//                 <Picker.Item label="Java" value="java" />
//                 <Picker.Item label="JavaScript" value="js" />
//             </Picker> */}
//             <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
//                 <TouchableOpacity>
//                     <Text>
//                         Login Now
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         </View>


//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",




//     },
//     logo: {
//         width: 200,
//         height: 200
//     },
//     btn: {
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 6,
//         },
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,

//         elevation: 12,
//     }

// })

// export default Profile;