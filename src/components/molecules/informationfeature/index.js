import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const InfoFeature = () => {
  return (
    <View style={{padding: 16, paddingBottom: 0}}>
      <View
        style={{
          height: 15,
          width: 55,
        }}>
        <Image
          source={require('../../../assets/logo/gojek.png')}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1c1c1c',
          marginTop: 15,
          marginBottom: 20,
        }}>
        Complete Your Profile
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={require('../../../assets/dummy/facebook-connect.png')}
          />
        </View>
        <View style={{marginLeft: 16, flex: 1, marginBottom: 16}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#a4a4a4',
            }}>
            Connect with facebook
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'normal',
              color: '#a4a4a4',
              width: '70%',
            }}>
            Login in faster without verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#61a756',
          paddingHorizontal: 12,
          paddingVertical: 11,
          alignSelf: 'flex-end',
          borderRadius: 4,
        }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
          CONNECT
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 16,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
        }}></View>
    </View>
  );
};

export default InfoFeature;
