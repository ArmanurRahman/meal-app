import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTiles from "../components/CategoryGridTiles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../components/HeaderIcon";

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

CategoryScreen.navigationOptions = (navdata) => {
    return {
        headerTitle: "Meal Categories",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                <Item
                    title='menu'
                    iconName='ios-menu'
                    onPress={() => {
                        navdata.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoryScreen;
