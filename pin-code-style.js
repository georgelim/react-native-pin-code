import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const codePinStyles = StyleSheet.create({
    container: {
        height          : 150,
        width           : width - 30,
        backgroundColor : '#FFF'
    },
    containerPin: {
        width           : width - 30,
        height          : 60,
        flexDirection   : 'row',
        justifyContent  : 'space-around',
        alignItems      : 'center',
        marginTop       : 20,

    },
    pin: {
        backgroundColor : '#f6f6f6',
        textAlign       : 'center',
        flex            : 1,
        marginLeft      : 20,
        marginRight     : 20,
        borderRadius    : 4,
        shadowColor     : '#000000',
        shadowOffset    : {
            width  : 2,
            height : 2
        },
        shadowRadius  : 5,
        shadowOpacity : 0.4
    },
    text: {
        textAlign   : 'center',
        color       : '#000000',
        fontSize    : 20,
        marginTop   : 30,
        fontFamily  : 'arial',
    },
    error: {
        textAlign   : 'center',
        color       : 'red',
        paddingTop  : 10
    }
});


