import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../components/HeaderIcon";
import Color from "../constants/Color";
import { useDispatch } from "react-redux";
import { setFilter } from "../store/action/meal";

const Filter = (props) => {
    return (
        <View style={styles.filter}>
            <Text style={styles.label}>{props.label}</Text>
            <Switch
                trackColor={{ true: Color.primaryColor }}
                value={props.value}
                onValueChange={props.onChange}
                thumbColor={Platform.OS === "android" ? Color.primaryColor : ""}
            />
        </View>
    );
};
const FilterScreen = (props) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactosFree, setIsLactosFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactosFree: isLactosFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        };
        dispatch(setFilter(appliedFilters));
    }, [isGlutenFree, isLactosFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        props.navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filter/ Restrictions</Text>
            <Filter
                label='Gluten-free'
                value={isGlutenFree}
                onChange={(newValue) => setIsGlutenFree(newValue)}
            />
            <Filter
                label='Lactos-free'
                value={isLactosFree}
                onChange={(newValue) => setIsLactosFree(newValue)}
            />
            <Filter
                label='Vegan'
                value={isVegan}
                onChange={(newValue) => setIsVegan(newValue)}
            />
            <Filter
                label='Vegetarian'
                value={isVegetarian}
                onChange={(newValue) => setIsVegetarian(newValue)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    filter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        marginLeft: 10,
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
        textAlign: "center",
    },
    label: {
        fontSize: 20,
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
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                <Item
                    title='save'
                    iconName='ios-save'
                    onPress={navdata.navigation.getParam("save")}
                />
            </HeaderButtons>
        ),
    };
};
export default FilterScreen;
