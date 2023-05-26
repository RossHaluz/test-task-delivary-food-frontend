export const selectOrders = state => state.cart.orderItems || [];

export const selectAmount = state => state.cart.orderItems