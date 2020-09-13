import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../components/HeaderIcon";

const FilterScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is filter screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

FilterScreen.navigationOptions = (navdata) => {
    return {
        headerTitle: "Filter Meals",
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
export default FilterScreen;
