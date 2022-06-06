import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import ScrollRableItem from '../../../components/molecules/scrollrableitem';

class ScrollrableFeature extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            height: 15,
            width: 60,
            marginLeft: 16,
          }}>
          <Image
            source={require('../../../assets/logo/go-food.png')}
            style={{
              width: undefined,
              height: undefined,
              flex: 1,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            paddingHorizontal: 16,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>
            Nearby Restaurant
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>
            See All
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{flexDirection: 'row', paddingLeft: 16}}>
          <ScrollRableItem
            title="Waroeng Jaya"
            img={require('../../../assets/dummy/go-food-kfc.jpg')}
          />
          <ScrollRableItem
            title="Om Ntus"
            img={require('../../../assets/dummy/go-food-banka.jpg')}
          />
          <ScrollRableItem
            title="Cuy Store"
            img={require('../../../assets/dummy/go-food-gm.jpg')}
          />
          <ScrollRableItem
            title="Alka Store"
            img={require('../../../assets/dummy/go-food-orins.jpg')}
          />
        </ScrollView>
        <View
          style={{
            marginTop: 16,
            borderBottomColor: '#e8e9ed',
            borderBottomWidth: 1,
            marginHorizontal: 16,
          }}></View>
      </View>
    );
  }
}

export default ScrollrableFeature;
