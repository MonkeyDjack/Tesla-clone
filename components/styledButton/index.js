import React from "react";
import { Button, View, Pressable, } from "react-native";
import styles from "./styles";

const StyledButton = props =>{
    <View style={styles.container}>
        <Pressable
            style={styles.button}
            onPress={()=> {
                console.warn('Hey there');
            }}>
            <Text style={styles.text}>Custom Order</Text>
        </Pressable>
    </View>
};

export default StyledButton;