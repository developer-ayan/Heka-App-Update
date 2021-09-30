import { View, Text, ScrollView, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entyp from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import BgImage from '../assets/backgroundImage/First.svg'
import Bitcoin from '../assets/Icons/bitcoin.svg'
import Ripple from '../assets/Icons/ripple.svg'
import Litecoin from '../assets/Icons/litecoin.svg'
import Dash from '../assets/Icons/dash coin.svg'
import Ethereum from '../assets/Icons/ethereum.svg'
import Neo from '../assets/Icons/neo coin.svg'







const Dashboard = () => {


    return (

        <ScrollView style={{flex  : 1 , backgroundColor: '#181818'  }}>


            <View >


                <View style={{ padding: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold' }}>Dashboard</Text>
                </View>

                <View >

                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontSize: 40, color: '#e3a902', fontWeight: 'bold' }}>$53,250</Text>
                        </View>

                        <View>
                            <Ionicons name='notifications' size={20} style={{ color: '#e3a902' }} />
                        </View>

                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#e3a902', fontWeight: 'bold' }}>Available Balance</Text>
                </View>

                {/* dashboard Details balance */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderBottomColor: "#707070", height: 70, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#d19d0b', padding: 5, borderRadius: 30, marginRight: 10, height: 30, justifyContent: 'center', width: 30, alignItems: 'center' }}>
                            <Bitcoin />
                        </View>

                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Bitcoin</Text>
                            <Text style={{ color: 'white', opacity: 0.6, fontWeight: 'bold' }}>Brought Via Visa Card</Text>
                        </View>
                    </View>


                    <View>
                        <Text style={{ color: '#70be7a', fontWeight: 'bold' }}>+0.3205763432 BTC</Text>
                        <Text style={{ color: 'white', textAlign: 'right', fontWeight: 'bold' }}>+4325 USD</Text>
                    </View>
                </View>

                {/* Ripple Balance with USD */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderBottomColor: "#707070", height: 70, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#b98ddd', padding: 5, borderRadius: 30, marginRight: 10, height: 30, justifyContent: 'center', width: 30, alignItems: 'center' }}>
                            <Ripple />
                        </View>

                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Ripple</Text>
                            <Text style={{ color: 'white', opacity: 0.6, fontWeight: 'bold' }}>Brought Via Visa Card</Text>
                        </View>
                    </View>


                    <View>
                        <Text style={{ color: '#70be7a', fontWeight: 'bold' }}>+0.3205763432 BTC</Text>
                        <Text style={{ color: 'white', textAlign: 'right', fontWeight: 'bold' }}>+4325 USD</Text>
                    </View>
                </View>

                {/* Litecoin with USD */}


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderBottomColor: "#707070", height: 70, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#f7e6a1', padding: 5, borderRadius: 30, marginRight: 10, height: 30, justifyContent: 'center', width: 30, alignItems: 'center' }}>
                            <Litecoin />
                        </View>

                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Litecoin</Text>
                            <Text style={{ color: 'white', opacity: 0.6, fontWeight: 'bold' }}>Brought Via Visa Card</Text>
                        </View>
                    </View>


                    <View>
                        <Text style={{ color: '#70be7a', fontWeight: 'bold' }}>+0.3205763432 BTC</Text>
                        <Text style={{ color: 'white', textAlign: 'right', fontWeight: 'bold' }}>+4325 USD</Text>
                    </View>
                </View>

                {/* Dash with USD  */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderBottomColor: "#707070", height: 70, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#00a4dd', padding: 5, borderRadius: 30, marginRight: 10, height: 30, justifyContent: 'center', width: 30, alignItems: 'center' }}>
                            <Dash />
                        </View>

                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Dash</Text>
                            <Text style={{ color: 'white', opacity: 0.6, fontWeight: 'bold' }}>Brought Via Visa Card</Text>
                        </View>
                    </View>


                    <View>
                        <Text style={{ color: '#70be7a', fontWeight: 'bold' }}>+0.3205763432 BTC</Text>
                        <Text style={{ color: 'white', textAlign: 'right', fontWeight: 'bold' }}>+4325 USD</Text>
                    </View>
                </View>

                {/* Ethereum with USD  */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderBottomColor: "#707070", height: 70, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#868905', padding: 5, borderRadius: 30, marginRight: 10, height: 30, justifyContent: 'center', width: 30, alignItems: 'center' }}>
                            <Ethereum />
                        </View>

                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Ethereum</Text>
                            <Text style={{ color: 'white', opacity: 0.6, fontWeight: 'bold' }}>Brought Via Visa Card</Text>
                        </View>
                    </View>


                    <View>
                        <Text style={{ color: '#70be7a', fontWeight: 'bold' }}>+0.3205763432 BTC</Text>
                        <Text style={{ color: 'white', textAlign: 'right', fontWeight: 'bold' }}>+4325 USD</Text>
                    </View>
                </View>

                {/* Neo with USD  */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderBottomColor: "#707070", height: 70, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#69e27d', padding: 5, borderRadius: 30, marginRight: 10, height: 30, justifyContent: 'center', width: 30, alignItems: 'center' }}>
                            <Neo style={{}} />
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



            </View>
        </ScrollView>
    )
}

export default Dashboard;