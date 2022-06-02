import styled from 'styled-components/native';

export const Container = styled.View``;

export const Text = styled.Text`
    margin-left: ${({theme}) => theme.sizes.padding * 1.5};
    
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

export const TextInput = styled.TextInput``;

export const Modal = styled.Modal``;

export const FlatList = styled.FlatList``;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const ScrollView = styled.ScrollView``;


// -----------------------------------------------------------//

export const LogoView = styled.View`
    margin-top: ${({theme}) => theme.sizes.padding * 5 }px;
    
    height: 100px;

    align-items: center;
    justify-content: center;
`;

export const LogoImg = styled.Image`
    width: 60%;
`;
