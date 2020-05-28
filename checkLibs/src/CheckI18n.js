import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { strings } from '../locales/i18n';


const CheckI18n =()=>{
    return(
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>Change Languages</Text>

            <Text style={{fontSize:16, fontWeight: 'normal'}}>{strings('login.login_button')}</Text>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>{strings('login.signup_button')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CheckI18n
