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

export default function App() {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
        {/* search bar */}
        <View style={{marginHorizontal: 17, flexDirection: 'row'}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              placeholder="what do you want to eat?"
              style={{
                borderWidth: 1,
                borderColor: '#e8e8e8',
                borderRadius: 25,
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 20,
                backgroundColor: 'white',
                marginRight: 18,
              }}
            />
            <Image
              source={require('./Icon/search.png')}
              style={{position: 'absolute', top: 6, left: 12}}
            />
          </View>
          <View
            style={{
              width: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('./Icon/promo.png')} />
          </View>
        </View>
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
            <Image source={require('./Icon/gopay.png')} />
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
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={require('./Icon/pay.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Pay
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={require('./Icon/nearby.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Nearby
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={require('./Icon/topup.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Top Up
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={require('./Icon/more.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                More
              </Text>
            </View>
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
              marginBottom: 18,
            }}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./Icon/go-ride.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-RIDE
              </Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./Icon/go-car.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-CAR
              </Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./Icon/go-bluebird.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-BLUEBIRD
              </Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./Icon/go-send.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-SEND
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 18,
            }}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./Icon/go-deals.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-DEALS
              </Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./Icon/go-pulsa.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-PULSA
              </Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./Icon/go-food.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-FOOD
              </Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./Icon/go-more.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                More
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 17,
            backgroundColor: '#f2f2f4',
            marginTop: 20,
          }}></View>
        {/* news */}
        <View
          style={{
            paddingTop: 16,
            paddingHorizontal: 16,
          }}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('./dummy/sepak-bola.jpg')}
              style={{height: 170, width: '100%', borderRadius: 6}}
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'black',
                opacity: 0.3,
                borderRadius: 6,
              }}></View>
            <View
              style={{
                height: 15,
                width: 55,
                position: 'absolute',
                top: 16,
                left: 16,
              }}>
              <Image
                source={require('./logo/white.png')}
                style={{
                  width: undefined,
                  height: undefined,
                  flex: 1,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
          <View
            style={{
              paddingTop: 16,
              paddingBottom: 20,
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
              GO-NEWS
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'normal',
                color: '#7a7a7a',
                marginTop: 5,
                marginBottom: 15,
              }}>
              Indonesia Berhasil Mengalahkan Malaysia Dengan Skor Telak 3-0
              Tanpa Balas Di SEAGAMES 2022
            </Text>
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
                READ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* internal infomation */}
        <View style={{padding: 16, paddingBottom: 0}}>
          <View
            style={{
              height: 15,
              width: 55,
            }}>
            <Image
              source={require('./logo/gojek.png')}
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
              <Image source={require('./dummy/facebook-connect.png')} />
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
        {/* banner information */}
        <View style={{padding: 16}}>
          <View
            style={{
              position: 'relative',
            }}>
            <Image
              source={require('./dummy/food-banner.jpg')}
              style={{height: 170, width: '100%', borderRadius: 6}}
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'black',
                opacity: 0.15,
                borderRadius: 6,
              }}></View>
            <View
              style={{
                height: 15,
                width: 55,
                position: 'absolute',
                top: 16,
                left: 16,
              }}>
              <Image
                source={require('./logo/white.png')}
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
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingBottom: 16,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: 5,
                  }}>
                  Free GO-FOOD Voucher
                </Text>
                <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
                  Quick, before they run out!
                </Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61a756',
                    paddingHorizontal: 12,
                    paddingVertical: 11,
                    alignSelf: 'stretch',
                    borderRadius: 4,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    GET VOUCHER
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 16,
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
            }}></View>
        </View>
        {/* buy restoran */}
        <View>
          <View
            style={{
              height: 15,
              width: 60,
              marginLeft: 16,
            }}>
            <Image
              source={require('./logo/go-food.png')}
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
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 4}}>
                <Image
                  source={require('./dummy/go-food-banka.jpg')}
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
                  Sederhana Minang
                </Text>
              </View>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 4}}>
                <Image
                  source={require('./dummy/go-food-gm.jpg')}
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
                  Alka Store
                </Text>
              </View>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 4}}>
                <Image
                  source={require('./dummy/go-food-kfc.jpg')}
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
                  Ceu Emi
                </Text>
              </View>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 4}}>
                <Image
                  source={require('./dummy/go-food-orins.jpg')}
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
                  Mang Tasman
                </Text>
              </View>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 4}}>
                <Image
                  source={require('./dummy/go-food-pak-boss.jpg')}
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
                  Ceu Lili
                </Text>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              marginTop: 16,
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginBottom: 100,
              marginHorizontal: 16,
            }}></View>
        </View>
      </ScrollView>
      {/* navbutton */}
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./Icon/home-active.png')}
          />
          <Text style={{fontSize: 10, color: '#43ab4a', marginTop: 4}}>
            Home
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./Icon/order.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Order
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./Icon/help.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./Icon/inbox.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Inbox
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./Icon/account.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
