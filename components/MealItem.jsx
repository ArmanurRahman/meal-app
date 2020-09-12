import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View style={styles.mealHeader}>
                    <ImageBackground
                        source={{ uri: props.image }}
                        style={styles.bgImage}
                    >
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>
                                {props.title}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.detailContainer}>
                    <Text>{props.duration}m</Text>
                    <Text>{props.affordability.toUpperCase()}</Text>
                    <Text>{props.complexity.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,

        backgroundColor: "#cfcfcf",
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 10,
        overflow: "hidden",
    },
    mealHeader: {
        height: "85%",
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },
    detailContainer: {
        height: "15%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
    },
    titleContainer: {
        backgroundColor: "rgba(0,0,0,.5)",
    },
    title: {
        textAlign: "center",
        fontFamily: "open-sans-bold",
        color: "white",

        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
});

export default MealItem;
