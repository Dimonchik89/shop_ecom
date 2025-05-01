import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice/cartSlice';

const store = configureStore({
	reducer: {
		cartReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV === 'development' ? true : false,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
