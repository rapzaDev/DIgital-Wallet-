import { useCallback } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useTheme } from "styled-components";
import { FeaturesType } from "../../hooks/types/features";
import useHome from "../../hooks/useHome";
import { icons, images } from "../../utils";
import FeaturesHeader from "../FeaturesHeader";

function Header() {

    const theme = useTheme();
    const { features } = useHome();

    const renderHeader = useCallback(() => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: theme.sizes.padding * 2
                }}
            >
                <View style={{flex: 1}}>
                    <Text style={{...theme.fonts.h1}}>Hello!</Text>
                    <Text style={{
                        ...theme.fonts.body2,
                        color: theme.colors.gray
                    }}>User19232198</Text>
                </View>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                       style={{
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: theme.colors.lightGray
                       }} 
                    >
                        <Image 
                            source={icons.bell}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: theme.colors.secondary
                            }}
                        />

                        <View
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                height: 10,
                                width: 10,
                                backgroundColor: theme.colors.red,
                                borderRadius: 5
                            }}
                        >
                            
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }, []);

    const renderBanner = useCallback(() => {
        return (
            <View
                style={{
                    height: 120,
                    borderRadius: 20,
                }}
            >
                <Image 
                    source={images.banner} 
                    resizeMode='cover'
                    style ={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                    }}
                /> 
            </View>
        );
    }, [])

    const renderItem = useCallback((item: FeaturesType) => {
        return (
            <TouchableOpacity
                style={{
                    marginBottom: theme.sizes.padding * 2,
                    width: 60,
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source={item.icon}
                        resizeMode='contain'
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: item.color
                        }}
                    />
                </View>

                <Text
                    style={{
                        textAlign: 'center',
                        flexWrap: 'wrap',
                        ...theme.fonts.body4
                    }}
                >
                    {item.description}
                </Text>
            </TouchableOpacity>
        );
    }, []);

    const renderFeatures = useCallback(() => {
        return (
            <FlatList 
                ListHeaderComponent={FeaturesHeader}
                data={features}
                numColumns={4}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => renderItem(item)}
                style={{
                    marginTop: theme.sizes.padding * 2
                }}
            />
        );
    }, []);

    const renderPromoHeader = useCallback(() => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: theme.sizes.padding
                }}
            >
                <View style={{flex: 1}}>
                    <Text style={{...theme.fonts.h3}}>Special Promos</Text>
                </View>

                <TouchableOpacity>
                    <Text style={{ color: theme.colors.gray, ...theme.fonts.body4}}>View All</Text>
                </TouchableOpacity>
            </View>
        )
    }, [])

    return(
        <View>
            {renderHeader()}
            {renderBanner()}
            {renderFeatures()}
            {renderPromoHeader()}
        </View>
    );
};

export default Header;