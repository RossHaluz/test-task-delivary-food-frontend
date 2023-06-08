export const selectFoods = state => state.food.foods || [];

export const isLoading = state => state.food.isLoading;

export const selectCurrentFood = state => state.food.currentFood;
