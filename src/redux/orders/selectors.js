export const selectOrders = state => state.cart.orderItems || [];

export const selectCount = state =>
  state.cart.orderItems.map(item => {
    return item.count;
  });
