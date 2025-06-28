import type {CartItem} from "../model/CartItem.ts";
import {createSlice} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";

interface CartState{
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemTOCart(state: CartState, action: ReturnType<ProductData>){
// Check if the item already exists in the cart
            const existingItem =
                state.items.find((item) => item.product.id === action.payload.id)
            if (!existingItem) {
                state.items.push({
                    product: action.payload,
                    itemCount: 1
                })
            }
        }
    }
});
export const {addItemTOCart} = cartSlice.actions;
export default cartSlice.reducer;
