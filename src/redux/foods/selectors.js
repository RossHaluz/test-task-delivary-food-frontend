export const selectFoods = state => state.food.foods || [];

export const isLoading = state => state.food.isLoading;

export const selectCurrentFood = state => state.food.currentFood;

export const selectTotalPage = state => state.food.totalPage;

export const selectCurrentPage = state => state.food.currentPage;

export const selectCurrentShop = state => state.food.currentShop;

export const selectCurrentPageCategory = state => state.food.currentPageCategory;

export const selectPageQtyCategory = state => state.food.pageQtyCategory;