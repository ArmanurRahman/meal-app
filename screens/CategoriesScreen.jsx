import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTiles from "../components/CategoryGridTiles";

const CategoryScreen = (props) => {
    const renderItem = (itemdata) => {
        return (
            <CategoryGridTiles
                title={itemdata.item.title}
                color={itemdata.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: "CategoryMeal",
                        params: { categoryId: itemdata.item.id },
                    });
                }}
            />
        );
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            renderItem={renderItem}
            data={CATEGORIES}
            numColumns={2}
        />
    );
};

CategoryScreen.navigationOptions = {
    headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoryScreen;
