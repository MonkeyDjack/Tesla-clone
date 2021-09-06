import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../styledButton";

const CarItem = props =>{

    const {name, tagline, image, taglineCTA} = props.car;

    return(
        <View style={styles.carContainer}>
            <ImageBackground source={image}
            style={styles.image}/>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}> {tagline}&nbsp;
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>

            <StyledButton type="primary" content={"Custom Order"} onPress={() => {
                console.warn("Cuatom order was pressed");
            }} />

            <StyledButton type="secondary" content={"Existing inventory"} onPress={() => {
                console.warn("Existing inventory was pressed");
            }} />

            </View>

        </View>
    );
};

export default CarItem;