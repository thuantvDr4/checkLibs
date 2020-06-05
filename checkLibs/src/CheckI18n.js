import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { strings } from '../locales/i18n';
import sqlite from './asset/sqlite';


const CheckI18n =()=>{

     async function saveTodb() {
         // caches.setCache('hello SQLite.......')
         sqlite.setCache(true);
    }

   async function readFromdb() {
       const data = await sqlite.getCache();
       console.log('DATA-->', data);
    }

    return(
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>Change Languages</Text>

            <Text style={{fontSize:16, fontWeight: 'normal'}}>{strings('login.login_button')}</Text>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>{strings('login.signup_button')}</Text>

            <TouchableOpacity onPress={saveTodb} style={{padding:10,}}>
                <Text>{'SAVE TO DB'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={readFromdb} style={{padding:10}}>
                <Text>{'READ FROM DB'}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default CheckI18n
