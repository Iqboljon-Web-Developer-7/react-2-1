const cart = (cart = [], action) => {
  let index = cart?.findIndex((item) => item.id === action?.product?.id);
  switch (action.type) {
    case "TOGGLE_CARD_ITEM":
      if (index < 0) {
        return (cart = [...cart, { ...action.product, quantity: 1 }]);
      }
      return (cart = cart.filter((item) => item.id !== action.product.id));
    case "INC_CART_ITEM_QUANTITY":
      index = cart?.findIndex((item) => item.id === action?.id);
      cart = cart.map((item, idx) =>
        idx == index ? { ...item, quantity: item.quantity + 1 } : item
      );
      return cart;
    case "DEC_CARD_ITEM_QUANTITY":
      cart = cart.map((item, idx) =>
        idx == index ? { ...item, quantity: item.quantity - 1 } : item
      );
      return cart;
    default:
      return cart;
  }
};

export default cart;
