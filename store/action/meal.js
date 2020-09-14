export const TOGGLE_FAV = "TOGGLE_FAV";
export const SET_FILTER = "SET_FILTER";

export const toggleFav = (mealId) => {
    return {
        type: TOGGLE_FAV,
        mealId: mealId,
    };
};

export const setFilter = (appliedFilters) => {
    return {
        type: SET_FILTER,
        filters: appliedFilters,
    };
};
