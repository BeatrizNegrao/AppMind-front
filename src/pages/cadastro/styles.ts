import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'ligthgray'
    },
    boxTop: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        flex: 2, 
        width: '100%',
        paddingHorizontal: 37,
        justifyContent: 'center'
    },
    boxButton: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 75
    },
    text: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    },
    boxInput: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderColor: '#ccc'
    },
    input: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
        paddingLeft: 5
    },
    button: {
        width: 230,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6f7475',
        borderRadius: 40,
        shadowColor: '#0000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16
    },
    TextBotton: {
        fontSize: 14,
        color: 'black', 
        marginBottom: 45
    },
});
