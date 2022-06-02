import { useCallback, useContext, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useTheme } from 'styled-components/native';
import useSignUp, { AreaDataType } from '../../hooks/useSignUp';
import { icons, images } from '../../utils';

import {
    Container,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ArrowLeft,
    Modal,
    ModalFlatList,
    KeyboardAvoidingView,
    ScrollView,
    LogoView,
    LogoImg,
    FormView,
    FullNameView,
    FullNameText,
    FullNameTextInput,
    PhoneNumberView,
    PhoneNumberText,
    PhoneNumbersView,
    CountryCodeBttn,
    CountryCodeArrowView,
    CountryCodeArrowImg,
    CountryCodeFlagView,
    CountryCodeFlagImg,
    CountryCodeView,
    CountryCode,
    PhoneNumber,
    PasswordView,
    PasswordText,
    PasswordTextInput,
    PasswordBttn,
    PasswordImg,
    ButtonView,
    Button,
    ButtonText,
    ModalBttn,
    ModalWrapper,
    ModalView,
    ModalItemBttn,
    ModalItemCountryFlag,
    ModalItemText,
} from './styles';

function SignUp({navigation} : any) {
    const theme = useTheme();
    
    const { 
        pssVisible, 
        setPssVisible, 
        selectedArea, 
        setModalVisible,
        modalVisible,
        areas,
        setSelectedArea
    } = useSignUp();

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

    const togglePasswordBttn = useCallback(() => {
        setPssVisible(prev => !prev);
    }, [pssVisible])

    const renderForm = useCallback(() => {
        return (
            <FormView>
                {/**Full Name */}
                <FullNameView>
                    <FullNameText 
                        style={{...theme.fonts.body3}}
                    >Full Name
                    </FullNameText>
                    <FullNameTextInput 
                        placeholder='Enter Full Name'
                        placeholderTextColor={theme.colors.white}
                        selectionColor={theme.colors.white}
                    />
                </FullNameView>

                {/**Phone Number */}
                <PhoneNumberView>
                    
                    <PhoneNumberText 
                        style={{...theme.fonts.body3}}
                    >Phone Number
                    </PhoneNumberText>

                    <PhoneNumbersView>
                        {/**Country Code */}
                        <CountryCodeBttn
                            onPress={() => setModalVisible(prev => !prev)}
                        >
                            <CountryCodeArrowView>
                                <CountryCodeArrowImg source={icons.down}/>
                            </CountryCodeArrowView>
                            
                            <CountryCodeFlagView>
                                <CountryCodeFlagImg 
                                    source={{uri: selectedArea.flag}} 
                                    resizeMode='contain'
                                />
                            </CountryCodeFlagView>

                            <CountryCodeView>
                                <CountryCode style={{...theme.fonts.body3}}>
                                    {selectedArea.callingCodes}
                                </CountryCode>
                            </CountryCodeView>

                        </CountryCodeBttn>

                        {/**Number */}
                        <PhoneNumber 
                            style={{...theme.fonts.body3}}
                            placeholder="Enter Phone Number"
                            placeholderTextColor={theme.colors.white}
                            selectionColor={theme.colors.white}
                        />
                    </PhoneNumbersView>
                </PhoneNumberView>

                {/**Password */}
                <PasswordView>
                    <PasswordText style={{...theme.fonts.body3}}>Password</PasswordText>
                    
                    <PasswordTextInput 
                        placeholder='Enter Password'
                        placeholderTextColor={theme.colors.white}
                        selectionColor={theme.colors.white}
                        style={{...theme.fonts.body3}}
                        secureTextEntry={!pssVisible}
                    />

                    <PasswordBttn onPress={() => togglePasswordBttn()}>
                        <PasswordImg source={pssVisible? icons.eye : icons.disable_eye}/>
                    </PasswordBttn>
                </PasswordView>

            </FormView>
        );
    }, [pssVisible, selectedArea]);

    const renderButton = useCallback(() => {
        return (
            <ButtonView>
                <Button onPress={() => navigation.navigate("Home")}>
                    <ButtonText style={{...theme.fonts.h3}}>Continue</ButtonText>
                </Button>
            </ButtonView>
        );
    }, []);

    const renderItem = useCallback((item : AreaDataType) => {
        return (
            <ModalItemBttn onPress={() => {
                setSelectedArea(item);
                setModalVisible(prev => !prev);
            }}>
                <ModalItemCountryFlag source={{uri: item.flag}}/>
                <ModalItemText style={{...theme.fonts.body4}}>{item.name}</ModalItemText>
            </ModalItemBttn>
        ) 
    }, [])

    const renderAreaCodesModal = useCallback(() => {
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <ModalBttn onPress={() => setModalVisible(prev => !prev)}>
                    <ModalWrapper>
                        <ModalView>
                            <ModalFlatList 
                                data={areas}
                                renderItem={({item}) => renderItem(item)}
                                keyExtractor={item => item.alpha2Code}
                                showsVerticalScrollIndicator={false}
                            />
                        </ModalView>
                    </ModalWrapper>
                </ModalBttn>
            </Modal>
        );
    }, [modalVisible])

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
                    { renderForm() }
                    { renderButton() }
                </ScrollView>
            </LinearGradient>

            {renderAreaCodesModal()}
        </KeyboardAvoidingView>
    );
};

export default SignUp;