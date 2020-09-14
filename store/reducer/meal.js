import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV, SET_FILTER } from "../action/meal";

const init = {
    meals: MEALS,
    filterMeals: MEALS,
    favMeals: [],
};

const reducer = (state = init, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            const existingIndex = state.favMeals.findIndex(
                (meal) => meal.id === action.mealId
            );
            if (existingIndex >= 0) {
                const updateFavMeal = [...state.favMeals];
                updateFavMeal.splice(existingIndex, 1);
                return { ...state, favMeals: updateFavMeal };
            } else {
                const meal = state.meals.find(
                    (meal) => meal.id === action.mealId
                );
                return {
                    ...state,
                    favMeals: state.favMeals.concat(meal),
                };
            }
        case SET_FILTER:
            const appliedFilter = action.filters;
            const updateFilterMeals = state.meals.filter((meal) => {
                if (appliedFilter.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilter.lactosFree && !meal.isLactosFree) {
                    return false;
                }
                if (appliedFilter.vegan && !meal.isVegan) {
                    return false;
                }
                if (appliedFilter.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                return true;
            });
            return { ...state, filterMeals: updateFilterMeals };
        default:
            return state;
    }
};

export default reducer;
