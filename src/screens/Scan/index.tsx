import AppLoading from 'expo-app-loading';
import { useCallback, useEffect, useState } from 'react';
import { Image, TouchableOpacity,Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Camera, CameraType } from 'expo-camera';

import { useTheme } from 'styled-components';
import { icons, images } from '../../utils';

function Scan({navigation} : any) {
    const theme = useTheme();

    const [hasPermission, setHasPermission] = useState(false);
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    if (hasPermission === null) {
        return <View />;
    }

    const renderHeader = useCallback(() => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: theme.sizes.padding * 4,
                    paddingHorizontal: theme.sizes.padding * 3
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 45,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Image 
                        source={icons.close}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: theme.colors.white
                        }}
                    />           
                </TouchableOpacity>

                <View
                    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                >
                    <Text style={{ color: theme.colors.white, ...theme.fonts.body3}}>Scan for Payment</Text>
                </View>

                <TouchableOpacity
                    style={{
                        height: 45,
                        width: 45,
                        backgroundColor: theme.colors.green,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => console.log('info')}
                >
                    <Image source={icons.info} style={{ height: 25, width: 25, tintColor: theme.colors.white}}/>
                </TouchableOpacity>
            </View>
        );
    }, []);

    const renderPaymentMethods = useCallback(() => {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: 220,
                    padding: theme.sizes.padding * 3,
                    borderTopLeftRadius: theme.sizes.radius,
                    borderTopRightRadius: theme.sizes.radius,
                    backgroundColor: theme.colors.white,
                }}
            >
                <Text style={{...theme.fonts.h4}}>Another payment methods</Text>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginTop: theme.sizes.padding * 2
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        onPress={() => console.log('phone number camera payment method')}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: theme.colors.lightpurple,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Image 
                                source={icons.phone} 
                                resizeMode="cover"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: theme.colors.purple
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: theme.sizes.padding, ...theme.fonts.body4}}>Phone Number</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: theme.sizes.padding * 2
                        }}
                        onPress={() => console.log('barcode payment method')}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: theme.colors.lightGreen,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Image 
                                source={icons.barcode} 
                                resizeMode="cover"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: theme.colors.green
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: theme.sizes.padding, ...theme.fonts.body4}}>Barcode</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }, []);

    const renderScanFocus = useCallback(() => {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image 
                    source={images.focus}
                    resizeMode="stretch"
                    style={{
                        marginTop: "-55%",
                        width: 200,
                        height: 300
                    }}
                />
            </View>
        );
    }, []);

    const onBarCodeScanned = useCallback((result: any) => {
        console.log(result.data);
    }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.transparent
            }}
        >   
            <Camera
                type={type}
                style={{flex: 1}}
                onBarCodeScanned={onBarCodeScanned}
            >
               {renderHeader()} 
               {renderPaymentMethods()} 
               {renderScanFocus()} 
            </Camera>
        </View>
    );
};

export default Scan;