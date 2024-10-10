import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface ProductColor {
    hex_code: string;
    colour_name: string;
}

export interface CartProduct {
    api_featured_image: string;
    brand: string;
    category: string;
    created_at: string;
    currency: string;
    description: string;
    id: number;
    image_link: string;
    name: string;
    price: string;
    price_sign: string;
    product_api_url: string;
    product_colors: ProductColor[];
    product_link: string;
    product_type: string;
    rating: number | null;
    tag_list: string[];
    updated_at: string;
    website_link: string;
    quantity: number | undefined,
}

export interface CartState {
    cart: CartProduct[];
}

interface IncreaseQuantityPayload {
    id: number;
}

interface DecreaseQuantityPayload {
    id: number;
}

interface RemoveItemPayload {
    id: number;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] } as CartState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                if (itemInCart.quantity !== undefined) {
                    itemInCart.quantity++;
                }
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseQuantity: (state, action: PayloadAction<IncreaseQuantityPayload>) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item && item.quantity !== undefined) {
                item.quantity++;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<DecreaseQuantityPayload>) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item && item.quantity !== undefined && item.quantity > 1) {
                item.quantity--;
            }
        },
        removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;


