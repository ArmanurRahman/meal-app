import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Color from "../constants/Color";

const MealsNavigation = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeal: CategoryMealScreen,
        MealDetails: MealDetailsScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:
                    Platform.OS === "android" ? Color.primaryColor : "",
            },
            headerTintColor:
                Platform.OS === "android" ? "white" : Color.primaryColor,
        },
    }
);

export default createAppContainer(MealsNavigation);
