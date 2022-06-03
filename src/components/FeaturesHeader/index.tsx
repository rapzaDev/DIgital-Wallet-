import { useCallback } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useTheme } from "styled-components";
import useHome from "../../hooks/useHome";
import { icons, images } from "../../utils";

function FeaturesHeader() {
    const theme = useTheme();

    return (
        <View
            style={{
                marginBottom: theme.sizes.padding * 2
            }}
        >
            <Text style={{...theme.fonts.h3}}>Features</Text>
        </View>
    );
};

export default FeaturesHeader;