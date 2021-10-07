import React from "react";
import { ImageBackground, View, SafeAreaView, Text  } from "react-native";
import Tabs from "./src/config/Tabs";
import bg1 from './src/assets/backgroundImage/bg1.png'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from "./src/Stores/Tabs/store";

function App() {

  return ( 


    <SafeAreaView style={{ flex: 1, backgroundColor: '#181818' }}>

      <Provider store={store}>
       
        <Tabs />

      </Provider>

    </SafeAreaView>






  )

}

export default App;