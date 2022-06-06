import React from 'react';
import {View, Image, Text} from 'react-native';

const NavbarButton = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image style={{width: 26, height: 26}} source={props.img} />
      <Text
        style={{
          fontSize: 10,
          color: props.active ? '#43ab4a' : '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default NavbarButton;
