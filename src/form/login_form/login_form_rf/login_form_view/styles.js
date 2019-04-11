import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rootFailed: {
        color: 'red',
        textAlign: 'center',
    },
    rootSucceeded: {
        color: 'green',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4A4A4A',
        height: 40,
        width: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        margin: 10
    },
    buttonText: {
        color: '#fff',
    }
});

export default styles;