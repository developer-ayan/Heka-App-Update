import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from "react";


const Stats = () => {



    return (

        <ScrollView style={{flex  : 1 , backgroundColor: '#181818'  }}>


            <View>

                <View style={{ backgroundColor: 'red', borderRadius: 20 }}>
                    <View >
                        <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Stats</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: '#d2a56e', marginHorizontal: 10, borderRadius: 15 }}>

                        <View  >
                            <View style={{ padding: 20 }}>
                                <Text style={{ color: 'white' }}>Bitcoin</Text>
                            </View>
                        </View>
                        <View>

                        </View>




                    </View>

                    {/* Graph */}

                    <View style={{ height: 250 }}>

                    </View>

                </View>


                {/* Dash And Etherium analytics */}

                <View style={{ marginVertical: 20 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, padding: 10, borderWidth: 1, borderBottomColor: "#707070" }}>
                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Dash</Text>
                            <Text style={{ color: 'white', opacity: 0.6, fontWeight: 'bold' }}>Brought Via Visa Card</Text>
                        </View>


                        <View>
                            <Text style={{ color: '#70be7a', fontWeight: 'bold' }}>+0.3205763432 BTC</Text>
                            <Text style={{ color: 'white', textAlign: 'right', fontWeight: 'bold' }}>+4325 USD</Text>
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, padding: 10, borderWidth: 1, borderBottomColor: "#707070" }}>
                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Etherium</Text>
                            <Text style={{ color: 'white', opacity: 0.6, fontWeight: 'bold' }}>Brought Via Visa Card</Text>
                        </View>


                        <View>
                            <Text style={{ color: '#70be7a', fontWeight: 'bold' }}>+0.3205763432 BTC</Text>
                            <Text style={{ color: 'white', textAlign: 'right', fontWeight: 'bold' }}>+4325 USD</Text>
                        </View>
                    </View>
                </View>


                {/* Buttons buy and sell  */}

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>

                    <View style={{ marginRight: 2 }}>
                        <TouchableOpacity style={{ backgroundColor: '#d2a56e', padding: 20, borderRadius: 15 , borderWidth : 2 , borderColor : '#d2a56e' }}><Text style={{ paddingHorizontal: 40, color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Buy</Text></TouchableOpacity>
                    </View>

                    <View style={{ marginLeft: 2 }}>
                        <TouchableOpacity style={{ padding: 20, borderRadius: 15, borderWidth: 2, borderColor: '#d2a56e' }}><Text style={{ paddingHorizontal: 40, color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Sell</Text></TouchableOpacity>
                    </View>

                </View>

            </View>
        </ScrollView>

    )
}

export default Stats;