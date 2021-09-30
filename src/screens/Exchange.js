import { View, Text, ScrollView, TouchableOpacity, ScrollViewBase, ImageBackground } from 'react-native'
import React from "react";
import Neo from '../assets/Icons/neo coin.svg'

const Exchange = () => {

    return (

        // <ScrollView style = {{flex : 1 , backgroundColor :' red'}}>

           
        <ScrollView style={{flex  : 1 , backgroundColor: '#181818'  }}>


            <View>


                <View style={{ padding: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold' }}>Exchange</Text>
                </View>

                <View >
                    <Text style={{ textAlign: 'center', fontSize: 40, color: '#e3a902', fontWeight: 'bold' }}>$4.879</Text>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#e3a902', fontWeight: 'bold' }}>Enter Amount</Text>
                </View>

                {/* Exchange cards */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderBottomColor: "#707070", height: 70, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#69e27d', padding: 5, borderRadius: 30, marginRight: 10, height: 30, justifyContent: 'center', width: 30, alignItems: 'center' }}>
                            <Neo />
                        </View>

                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Neo</Text>
                            <Text style={{ color: 'white', opacity: 0.6, fontWeight: 'bold' }}>Brought Via Visa Card</Text>
                        </View>
                    </View>


                    <View>
                        <Text style={{ color: '#70be7a', fontWeight: 'bold' }}>+0.3205763432 BTC</Text>
                        <Text style={{ color: 'white', textAlign: 'right', fontWeight: 'bold' }}>+4325 USD</Text>
                    </View>
                </View>

                {/* calculations */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, marginTop: 30 }}>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>1</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>2</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>3</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, marginTop: 10 }}>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>4</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>5</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>6</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, marginTop: 10 }}>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>7</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>8</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>9</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, marginTop: 10 }}>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>.</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>0</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ padding: 25, backgroundColor: "#3c3638", borderRadius: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>x</Text></TouchableOpacity>
                    </View>
                </View>

                {/* Countinue Button */}


                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#d2a56e', borderRadius: 20, padding: 10, width: "80%", justifyContent: 'center'
                    }}><Text style={{ fontSize: 20, textAlign: 'center', padding: 10, color: 'white', }}>Continue</Text></TouchableOpacity>
                </View>


            </View>

        </ScrollView>
    )
}

export default Exchange;