import React from "react";
import { ImageBackground, View, SafeAreaView } from "react-native";
import Tabs from "./src/config/Tabs";
import bg1 from './src/assets/backgroundImage/bg1.png'
import 'react-native-gesture-handler';


function App() {
  return (


    <SafeAreaView style={{ flex: 1 , backgroundColor : '#181818'}}>

      <Tabs />
      
    </SafeAreaView>





  )

}

export default App;