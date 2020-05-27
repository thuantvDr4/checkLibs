import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
} from "rn-placeholder";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'



const Main =()=>{

    const[isLoading, setIsloading] = useState(false)
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

            {/*Todo:-----> ShimmerPlaceHolder*/}
            <ShimmerPlaceHolder autoRun={true} />
            <ShimmerPlaceHolder autoRun={true} visible={isLoading}>
                <Text>
                    Wow, awesome here.
                </Text>
            </ShimmerPlaceHolder>

        </View>
    )
}

const styles = StyleSheet.create({

});

export default Main;
