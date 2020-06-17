import React, {useEffect, useState, useRef} from 'react';
import {View,
    Text,
    StyleSheet,
    Alert,
    Image,
    Platform,
    TouchableOpacity,

} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS} from 'react-native-permissions';


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

    const [initialPosition, setInitialPosition]  = useState();
    const [ondrag, setOndrag] = useState(false);

    const mapRef = useRef();

    useEffect( ()=>{
        requestLocationPermission();
    }, [] );


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


    async function requestLocationPermission() {
        if( Platform.OS === 'ios' ) {
           var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
           console.log('IOS-->', response);
            if(response === 'granted'){
                locateCurrentPosition();
            }

        }else {
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log('Android-->', response);
            if(response === 'granted'){
                locateCurrentPosition();
            }
        }
    }


    function locateCurrentPosition() {
        Geolocation.getCurrentPosition(
            position => {
                console.log('my position-->',JSON.stringify(position));
                let myPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta:  0.09,
                    longitudeDelta: 0.035
                }
                setInitialPosition(myPosition);
            },
            error => Alert.alert(error.message),
            {enableHighAccuracy: true, timeout: 1000, maximumAge: 1000}

        )
    }

    function onRegionChange(region) {
        // console.log('region new-->', region );
    }

    function onDrag(e) {
        // this.setState({ x: e.nativeEvent.coordinate })
        console.log('region new-->', e.nativeEvent );
    }

    function _onPress(e) {
        console.log('region new when longPress-->', e.nativeEvent);
    }
    function _onPoiClick(e) {
        console.log('region new when ponPiClick-->', e.nativeEvent);
    }

    function _onMarkerDrag() {
        setOndrag(true);
    }


    return(
        <View style={styles.container}>
            <MapView
                ref= {mapRef}
                provider= {PROVIDER_GOOGLE}
                style= {styles.map}
                region={{
                    latitude: 37.78825,
                    longitude:  -122.4324,
                    latitudeDelta:  0.09,
                    longitudeDelta: 0.035
                }}
                zoomEnabled={true}
                // initialRegion= {initialPosition}
                showsUserLocation= {true}
                // showsMyLocationButton={true}
                // onRegionChange={onRegionChange}
                onLongPress = {_onPress}
                onPoiClick = {_onPoiClick}
                onPanDrag = {_onMarkerDrag}
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
                    onDragEnd={(e) => onDrag(e)}
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

            {!ondrag ?
            <View style={styles.carousel}>

            </View>
                :
            <TouchableOpacity style={styles.fab} onPress={()=>setOndrag(false)}>

            </TouchableOpacity>
            }
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject
    },
    map:{
        ...StyleSheet.absoluteFillObject
    },
    fab:{
        backgroundColor:'rgba(0, 0, 0, 0.6);',
        height:40,
        width: 40,
        borderRadius:20,
        position:'absolute',
        right:5,
        bottom:10
    },
    carousel:{
        backgroundColor:'rgba(255, 128, 171, 0.6);',
        height:100,
        width: 300,
        position:'absolute',
        left:5,
        bottom:10
    }
});

export default CustomMap;
