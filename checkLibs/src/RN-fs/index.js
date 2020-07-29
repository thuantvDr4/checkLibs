import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const Main = () => {
  const [isLoading, setIsloading] = useState(false);
  return (
    
    <View>
        <Text>'TEST RN FS'</Text>
    </View>
      
  );
};


//
const styles = StyleSheet.create({
    
});

export default Main;
