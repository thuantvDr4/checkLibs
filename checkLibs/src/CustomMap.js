import React from 'react';
import {View, Text, StyleSheet, Alert, Image } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle} from 'react-native-maps';


const CustomMap =()=>{

    const state ={
        coordinates: [
            { name: 'Burger', latitude: 37.8025259, longitude: -122.4351431, image: require('./img/burger.jpg') },
            { name: 'Pizza', latitude: 37.7946386, longitude: -122.421646, image: require('./img/pizza.jpg') },
            { name: 'Soup', latitude: 37.7665248, longitude: -122.4165628, image: require('./img/soup.jpg') },
            { name: 'Sushi', latitude: 37.7834153, longitude: -122.4527787, image: require('./img/sushi.jpg') },
            { name: 'Curry', latitude: 37.7948105, longitude: -122.4596065, image: require('./img/curry.jpg') },
        ]
    }


    function showMessage() {
        Alert.alert(
            'Welcome!',
            'do somethings...',
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "OK", }
            ],
            { cancelable: false }
        )
    }


    return(
            <MapView
                provider={PROVIDER_GOOGLE}
                style ={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta:  0.09,
                    longitudeDelta: 0.035
                }}
            >

                <Polygon
                    coordinates={state.coordinates}
                    fillColor={`rgba(100,100,200,0.4)`}
                />

                <Circle
                    fillColor={`rgba(200,300,200,0.5)`}
                    center={{latitude: 37.8025259, longitude: -122.4351431}}
                    radius={800}/>

                <Marker
                    // image={require('./img/sushi.png')}
                    draggable={true}
                    coordinate={{latitude: 37.782529, longitude: -122.4351431}}>
                    <Image source={require('./img/sushi.png')} style={{height: 50, width:50 }} />
                    <Callout onPress={showMessage}>
                        <Text>{'San Francisco'}</Text>
                    </Callout>
                </Marker>


                {
                    state.coordinates.map( (marker,index) =>(
                        <Marker
                            key={marker.name}
                            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                            title={marker.name}
                        >
                            <Callout onPress={showMessage}>
                                <Text>{marker.name}</Text>
                            </Callout>
                        </Marker>
                    ) )
                }

            </MapView>
    )

}

const styles = StyleSheet.create({
    map:{
        flex:1
    }
});

export default CustomMap;
