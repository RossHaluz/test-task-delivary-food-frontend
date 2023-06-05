export const selectOrders = state => state.cart.orderItems || [];

export const selectTotalPrice = state => state.cart.totalPrice;

export const selectSuccessOrder = state => state.cart.successOrder;

export const selectCartQuantity = state => state.cart.totalQuantity;

export const selectAmountItemPrice = state => state.cart.amountItemPrice;
