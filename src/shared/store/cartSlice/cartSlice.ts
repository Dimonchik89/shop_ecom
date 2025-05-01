import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICart } from '../type';
import { IProduct } from '../../../entities/product/model/product';

export interface CartState {
	cart: ICart[];
}

const initialState: CartState = {
	cart: [],
};

// слайс для роботи зі стором
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: (create) => ({
		addToCart: create.reducer((state, action: PayloadAction<IProduct>) => {
			const inCart = state.cart.find((item) => item.id === action.payload.id);

			if (inCart) {
				state.cart = state.cart.map((item) => {
					if (item.id === action.payload.id) {
						return { ...item, quantity: item.quantity + 1 };
					}
					return item;
				});
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
		}),
		increment: create.reducer((state, action: PayloadAction<number>) => {
			state.cart = state.cart.map((item) => {
				if (item.id === action.payload) {
					return {
						...item,
						quantity: (item.quantity += 1),
					};
				}
				return item;
			});
		}),
		decrement: create.reducer((state, action: PayloadAction<number>) => {
			state.cart = state.cart.map((item) => {
				if (item.id === action.payload) {
					return {
						...item,
						quantity: (item.quantity -= 1),
					};
				}
				return item;
			});
		}),
		removeFromCart: create.reducer((state, action: PayloadAction<number>) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		}),
	}),
});

const { actions, reducer } = cartSlice;
export const { addToCart, increment, decrement, removeFromCart } = actions;
export default reducer;
