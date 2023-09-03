import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)

        const existingCartItem = state.items[existingCartItemIndex];

        let updateAddCartItems;

        if (existingCartItem) {
            const updateAddCartItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updateAddCartItems = [...state.items]
            updateAddCartItems[existingCartItemIndex] = updateAddCartItem;
        }else {
            updateAddCartItems = state.items.concat(action.item)    
        }
        return {
            items: updateAddCartItems,
            totalAmount: updateTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex];
        const updateTotalAmount = state.totalAmount - existingCartItem.price

        let updateCartItems;

        if(existingCartItem.amount === 1) {
            updateCartItems = state.items.filter((item) => item.id !== action.id)
        }else{
            const updateCartItem = { ...existingCartItem, amount: existingCartItem.amount - 1}
            updateCartItems = [...state.items]
            updateCartItems[existingCartItemIndex] = updateCartItem
        }
        return {
            items: updateCartItems,
            totalAmount: updateTotalAmount
        }
    }
    
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemsCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemsCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext =  {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addItemsCartHandler,
        removeItems: removeItemsCartHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;