import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV } from "../action/meal";

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
        default:
            return state;
    }
};

export default reducer;
