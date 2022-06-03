import { useCallback } from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useTheme } from 'styled-components';
import { SpecialPromoType } from '../../hooks/types/specialPromo';
import useHome from '../../hooks/useHome';
import { icons, images } from '../../utils';

import Header from '../../components/Header';

function Home() {
    const theme = useTheme();
    const { specialPromos } = useHome();

    const renderItem = useCallback((item: SpecialPromoType) => {
        return (
            <TouchableOpacity
                style={{
                    marginVertical: theme.sizes.base,
                    width: theme.sizes.width / 2.5,
                }}
                onPress={() => {}}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: theme.colors.primary,
                    }}
                >
                    <Image 
                        source={images.promoBanner} 
                        resizeMode='cover'
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                    />
                </View>

                <View
                    style={{
                        padding: theme.sizes.padding,
                        backgroundColor: theme.colors.lightGray,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                    }}
                >
                    <Text style={{...theme.fonts.h4}}>{item.title}</Text>
                    <Text style={{...theme.fonts.body4}}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )
    }, []);

    const renderPromos = useCallback(() => {
        return (
            <FlatList 
                ListHeaderComponent={Header}
                contentContainerStyle={{ paddingHorizontal: theme.sizes.padding * 3}}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={specialPromos}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => renderItem(item)}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{ marginBottom: 80}}>
                    </View>
                }
            />
        );
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white}}>
            {renderPromos()}
        </SafeAreaView>
    );
};

export default Home;