import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        zIndex: 99,
        position: 'absolute',
        width: '100%',
        top: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    logo:{
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu:{
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});

export default styles;