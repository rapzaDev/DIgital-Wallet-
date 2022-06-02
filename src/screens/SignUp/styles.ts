import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { AreaDataType } from '../../hooks/useSignUp';

export const Container = styled.View``;

export const Text = styled.Text`
    margin-left: ${({theme}) => theme.sizes.padding * 1.5}px;
    
    color: ${({theme}) => theme.colors.white};
`;

export const TouchableOpacity = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;

    margin-top: ${({ theme } ) => theme.sizes.padding * 6 }px;
`;

export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback``;

export const ArrowLeft = styled.Image`
    width: 20px;
    height: 20px;
    tintColor: ${({theme}) => theme.colors.white};
`;

export const Modal = styled.Modal``;

export const ModalFlatList = styled( FlatList as new ( props: FlatListProps<AreaDataType> ) => FlatList<AreaDataType>)`
    padding: ${({ theme } ) => theme.sizes.padding * 2 }px;
    margin-bottom: ${({ theme } ) => theme.sizes.padding * 2 }px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const ScrollView = styled.ScrollView``;


// -----------------------------------------------------------//

//  LOGO
export const LogoView = styled.View`
    margin-top: ${({theme}) => theme.sizes.padding * 5 }px;
    
    height: 100px;

    align-items: center;
    justify-content: center;
`;

export const LogoImg = styled.Image`
    width: 60%;
`;

//  FORM
export const FormView = styled.View`
    margin-top: ${({theme}) => theme.sizes.padding * 3 }px;
    marginHorizontal: ${({theme}) => theme.sizes.padding * 3 }px;
`;

export const FullNameView = styled.View`
    margin-top: ${({theme}) => theme.sizes.padding * 3 }px;
`;

export const FullNameText = styled.Text`
    color: ${({theme}) => theme.colors.lightGreen};
`;

export const FullNameTextInput = styled.TextInput`
    marginVertical: ${({theme}) => theme.sizes.padding }px;
    border-bottom-color: ${({theme}) => theme.colors.white };
    border-bottom-width: 1px;
    height: 40px;
    color: ${({theme}) => theme.colors.white };
`;


export const PhoneNumberView = styled.View`
    margin-top: ${({theme}) => theme.sizes.padding * 2 }px;
`;

export const PhoneNumberText = styled.Text`
    color: ${({theme}) => theme.colors.lightGreen};
`;

export const PhoneNumbersView = styled.View`
    flex-direction: row;
`;

export const CountryCodeBttn = styled.TouchableOpacity`
    flex-direction: row;
    marginHorizontal: 5px;

    width: 100px;
    height: 50px;

    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.white };
`;

export const CountryCodeArrowView = styled.View`
    justify-content: center;
`;

export const CountryCodeArrowImg = styled.Image`
    width: 10px;
    height: 10px;
    tintColor: ${({theme}) => theme.colors.white };
`;

export const CountryCodeFlagView = styled.View`
    justify-content: center;
    margin-left: 5px;
`;

export const CountryCodeFlagImg = styled.Image`
    width: 30px;
    height: 30px;
`;

export const CountryCodeView = styled.View`
    justify-content: center;
    margin-left: 5px;
`;

export const CountryCode = styled.Text`
    color: ${({theme}) => theme.colors.white };
`;

export const PhoneNumber = styled.TextInput`
    flex: 1;

    marginVertical: ${({theme}) => theme.sizes.padding }px;
    border-bottom-color: ${({theme}) => theme.colors.white };
    border-bottom-width: 1px;
    height: 40px;
    color: ${({theme}) => theme.colors.white };
`;

export const PasswordView = styled.View`
    margin-top: ${({theme}) => theme.sizes.padding * 2 }px;
`;

export const PasswordText = styled.Text`
    color: ${({theme}) => theme.colors.lightGreen };
`;

export const PasswordTextInput = styled.TextInput`
    marginVertical: ${({theme}) => theme.sizes.padding }px;
    border-bottom-color: ${({theme}) => theme.colors.white };
    border-bottom-width: 1px;
    height: 40px;
    color: ${({theme}) => theme.colors.white };
`;

export const PasswordBttn = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    bottom: 10px;
    height: 30px;
    width: 30px;
`;

export const PasswordImg = styled.Image`
    height: 20px;
    width: 20px;
    tintColor: ${({theme}) => theme.colors.white };
`;

export const ButtonView = styled.View`
    margin: ${({theme}) => theme.sizes.padding * 3 }px;
`;

export const Button = styled.TouchableOpacity`
    height: 60px;
    background-color: ${({theme}) => theme.colors.black };
    border-radius: ${({theme}) => theme.sizes.radius / 1.5 }px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: ${({theme}) => theme.colors.white };
`;

export const ModalBttn = styled.TouchableWithoutFeedback`

`;

export const ModalWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ModalView = styled.View`
    height: 400px;
    width: ${({theme}) => theme.sizes.width * 0.8}px;
    background-color: ${({theme}) => theme.colors.lightGreen};
    border-radius: ${({theme}) => theme.sizes.radius}px;
`;

export const ModalItemBttn = styled.TouchableOpacity`
    padding: ${({theme}) => theme.sizes.padding}px;
    flex-direction: row;
`;

export const ModalItemCountryFlag = styled.Image`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const ModalItemText = styled.Text`
    
`;