import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import BannerFeature from './src/components/molecules/bannerfeature';
import GopayFeature from './src/components/molecules/gopayfeature';
import InfoFeature from './src/components/molecules/informationfeature';
import MainFeature from './src/components/molecules/mainfeature';
import NewsFeature from './src/components/molecules/newsfeature';
import SearchFeature from './src/components/molecules/searchfeature';
import NavbarButton from './src/containers/organisms/buttonnavbarfeature';
import ScrollrableFeature from './src/containers/organisms/scrollrablefeature';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
        {/* search bar */}
        <SearchFeature />
        {/* gopay */}
        <View style={{marginHorizontal: 17, marginTop: 8}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#2c5fb8',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              padding: 14,
            }}>
            <Image source={require('./src/assets/Icon/gopay.png')} />
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
              Rp 9.999.999.999.999.999,00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#2f65bd',
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <GopayFeature
              title="Pay"
              img={require('./src/assets/Icon/pay.png')}
            />
            <GopayFeature
              title="Nearby"
              img={require('./src/assets/Icon/nearby.png')}
            />
            <GopayFeature
              title="Top Up"
              img={require('./src/assets/Icon/topup.png')}
            />
            <GopayFeature
              title="More"
              img={require('./src/assets/Icon/more.png')}
            />
          </View>
        </View>
        {/* feature */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 18,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              flexWrap: 'wrap',
            }}>
            <MainFeature
              title="GO-RIDE"
              img={require('./src/assets/Icon/go-ride.png')}
            />
            <MainFeature
              title="GO-CAR"
              img={require('./src/assets/Icon/go-car.png')}
            />
            <MainFeature
              title="GO-BLUEBIRD"
              img={require('./src/assets/Icon/go-bluebird.png')}
            />
            <MainFeature
              title="GO-SEND"
              img={require('./src/assets/Icon/go-send.png')}
            />
            <MainFeature
              title="GO-DEALS"
              img={require('./src/assets/Icon/go-deals.png')}
            />
            <MainFeature
              title="GO-PULSA"
              img={require('./src/assets/Icon/go-pulsa.png')}
            />
            <MainFeature
              title="GO-FOOD"
              img={require('./src/assets/Icon/go-food.png')}
            />
            <MainFeature
              title="MORE"
              img={require('./src/assets/Icon/go-more.png')}
            />
          </View>
        </View>
        <View
          style={{
            height: 17,
            backgroundColor: '#f2f2f4',
            marginTop: 20,
          }}></View>
        {/* news */}
        <NewsFeature />
        {/* internal infomation */}
        <InfoFeature />
        {/* banner information */}
        <BannerFeature />
        {/* buy restoran */}
        <ScrollrableFeature />
      </ScrollView>
      {/* navbutton */}
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <NavbarButton
          title="Home"
          img={require('./src/assets/Icon/home-active.png')}
          active
        />
        <NavbarButton
          title="Order"
          img={require('./src/assets/Icon/home-active.png')}
        />
        <NavbarButton
          title="Help"
          img={require('./src/assets/Icon/home-active.png')}
        />
        <NavbarButton
          title="Inbox"
          img={require('./src/assets/Icon/home-active.png')}
        />
        <NavbarButton
          title="Account"
          img={require('./src/assets/Icon/home-active.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
