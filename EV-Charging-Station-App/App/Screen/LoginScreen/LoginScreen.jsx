import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from './../../Utils/Colors.js'
import * as WebBrowser from 'expo-web-browser';
import  {useWarmUpBrowser } from './../../../hooks/warmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';




WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();

    const {startOAuthFlow} = useOAuth ({strategy:"oauth_google"})
    const onPress=async()=> {
        try{
            const { createdSessionId, signIn, signUp, setActive} =
            await startOAuthFlow();

            if (createdSessionId){
                setActive({ session: createdSessionId });
            } else {

            }
            }catch (err) {
                console.error("OAuth error",err);
            }
        }
    
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:80
    }}>
      <Image source={require('./../../../assets/images/logo2.png')}
      style={styles.logoImage}/>
      <Image source={require('./../../../assets/images/ev-charging.png')}
      style={styles.bgImage}
      />
      <View style={{padding:20}}>
<Text style={styles.heading}>Your Ultimate EV charging station Finder App</Text>
<Text style={styles.desc}>Find EV charging station near you, plan trip and so much more in just one click</Text>

<TouchableOpacity style={styles.button}
onPress={onPress}>
    <Text style={{
        color:Colors.WHITE,
        textAlign:'center',
        fontFamily:'outfit',
        fontSize:17,
    }}>Login With Google</Text>
</TouchableOpacity>
</View>
    </View>
  )
}



const styles = StyleSheet.create({
  logoImage:{
    width:200,
    height:100,
    objectFit:'contain'
  },
  bgImage:{
    width:'100%',
    height:240,
    marginTop:20,  
    objectFit:'cover'
  },
  heading:{
    fontSize:25,
    fontFamily:'outfit-bold',
    textAlign:'center',
    marginTop:20
  },
  desc:{
    fontSize:17,
    fontFamily:'outfit',
    marginTop:15,
    textAlign:'center',
    color:'#000',
    color:Colors.GRAY,
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    display:'flex',
    borderRadius:99,
    marginTop:70,
  }
})
