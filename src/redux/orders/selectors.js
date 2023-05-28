export const selectOrders = state => state.cart.orderItems || [];

export const selectAmount = state => state.cart.orderItems 

export const selectTotalPrice = state => state.cart.totalPrice;

export const selectSuccessOrder = state => state.cart.successOrder;