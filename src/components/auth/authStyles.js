import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#beed15',
    },
    form: {
        // backgroundColor: '#fff',
        padding: 10,
        width: '90%',
        borderRadius: 10
    },
    inputs: {
        borderColor: 'transparent',
        borderWidth: 1,
        padding: 7,
        borderRadius: 5,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: '#fff'
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 9,
        gap: 10,
    },
    buttonContainer: {
        marginTop: 10,
    },
    button: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        justifyContent: "center",
        alignItems:"center",
        padding: 12,
    },
    headerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    authError: {
        color: 'red',
        textAlign: 'center'
    },
    label: {
        color: 'grrgba(255, 255, 255, 0.8)'
    }
});