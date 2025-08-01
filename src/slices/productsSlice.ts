import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";
import {backendApi} from "../api.ts";

interface ProductState {
    list: ProductData[],
    error: string | null | undefined
}

const initialState: ProductState = {
    list: [],
    error: null
}

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        // const response = await fetch('./product-data.json');
        // return await response.json();

        const response = await backendApi.get('/products/all');
        return await response.data;
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, () => {
            alert('products are still loading');
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.list = action.payload;
        }).addCase(getAllProducts.rejected, (state, action) => {
            state.error = action.error.message || 'Failed to load products';
            alert(state.error);
        })
    }
});

export const productsReducer = productSlice.reducer;