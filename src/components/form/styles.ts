import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    label: {
        position: 'absolute',
        left: 20,
        top: 10,
        zIndex: 10,
        fontSize: 12,
        color: '#7D77FF',
        paddingHorizontal: 5,
    },
    textInput: {
        backgroundColor: '#1D1C47',
        paddingVertical: 15,
        paddingStart: 25,
        paddingEnd: 40,
        borderRadius: 15,
        borderWidth: 1.5,
        color: 'white',
        width: '80%',
        fontSize: 16,
        fontWeight: '500',
        borderColor: '#7871FF',
    },
    inputContainer: {
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: 20,
        color: '#7876B1',
    },
});
