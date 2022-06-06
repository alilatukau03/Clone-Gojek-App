import React from 'react';
import {View, Text, Image} from 'react-native';

const ScrollRableItem = props => {
  return (
    <View style={{marginRight: 16}}>
      <View style={{width: 150, height: 150, borderRadius: 4}}>
        <Image
          source={props.img}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            resizeMode: 'cover',
            borderRadius: 4,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#1c1c1c',
            marginTop: 12,
          }}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default ScrollRableItem;
