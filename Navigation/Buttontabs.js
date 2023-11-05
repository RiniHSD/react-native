import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import {WebView} from 'react-native-webview';

const Tab = createBottomTabNavigator();

const webmap = require('../Peta/peta.html');

function HomeScreen() {
    return (
        <ScrollView>
            <Text style = {styles.title}> GIS PORTOFOLIO </Text>
            <View style = {styles.listitems}>
                <Image source={require('../Peta/Geomorfologi.png')} style={styles.image} />
                <Text style = {styles.caption}> Peta Geomorfologi Kepulauan Seribu </Text>
            </View>
            <View style = {styles.listitems}>
                <Image source={require('../Peta/Madura.png')} style={styles.image} />
                <Text style = {styles.caption}> Peta Habitat Bentik Pulau Serasan, Natuna</Text>
            </View>
            <View style = {styles.listitems}>
                <Image source={require('../Peta/PANGGANG.png')} style={styles.image} />
                <Text style = {styles.caption}> Peta Perwilayahan DAS Alo </Text>
            </View>
            <View style = {styles.listitems}>
                <Image source={require('../Peta/Geomorfologi.png')} style={styles.image} />
                <Text style = {styles.caption}> Peta Probabilitas Kebakaran Hutan dan Lahan  </Text>
            </View>
        </ScrollView>
    );
}

function MapsScreen() {
    return (
    <WebView
    source={webmap}
    />
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio/>
        </View>
    );
}

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="home" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Map" component={MapsScreen} options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="user-circle" color={color} size={size}/>
        ),
        }}
    />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
    image : {
        width : 356.4,
        height : 252,
        resizeMode : 'stretch',
    },
    listitems :{
        padding: 10,
        alignItems : 'center',
    },
    caption: {
        fontSize: 16,
        //fontWeight : 'bold',
        color: '#000'
    },
    title: {
        fontSize: 25,
        fontWeight : 'bold',
        color: '#000',
        textAlign : 'center',
        marginTop : 10
    },
});