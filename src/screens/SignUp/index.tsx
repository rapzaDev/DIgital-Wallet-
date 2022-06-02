import { useCallback } from 'react';
import { Platform } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useTheme } from 'styled-components/native';
import { icons, images } from '../../utils';

import {
    Container,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ArrowLeft,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    LogoView,
    LogoImg
} from './styles';


function SignUp() {
    const theme = useTheme();

    const renderHeader = useCallback(() => {
        return (
            <TouchableOpacity
                style={{
                    paddingHorizontal: theme.sizes.padding * 2
                }}
                onPress={() => console.log('SignUp')}
            >
                <ArrowLeft 
                    source={icons.back}
                    resizeMode="contain"
                />
                <Text style={{...theme.fonts.h4}}> Sign Up </Text>
            </TouchableOpacity>
        );
    }, []);

    const renderLogo = useCallback(() => {
        return (
            <LogoView>
                <LogoImg 
                    source={images.wallieLogo}
                    resizeMode='contain'
                />
            </LogoView>
        );
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios' ? "padding" : undefined }
        >
            <LinearGradient
                colors={[
                    theme.colors.lime,
                    theme.colors.emerald
                ]}
                style={{ flex: 1 }}
            >
                <ScrollView>
                    { renderHeader() }
                    { renderLogo() }
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default SignUp;