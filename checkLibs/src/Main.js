import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
} from "rn-placeholder";


const Main =()=>{
    return(
        <View style={{alignItems:'center', justifyContent:'center', paddingHorizontal:20}}>
            <Placeholder
                Animation={Fade}
                Left={PlaceholderMedia}
                Right={PlaceholderMedia}
            >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
            </Placeholder>

            <Placeholder
                Animation={Fade}
                Left={PlaceholderMedia}
                Right={PlaceholderMedia}
            >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
            </Placeholder>

            <Placeholder
                Animation={Fade}
                Left={PlaceholderMedia}
                Right={PlaceholderMedia}
            >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
            </Placeholder>

            {/*Todo:-----> skeleton*/}


        </View>
    )
}

const styles = StyleSheet.create({

});

export default Main;
