import { createSelector } from '@reduxjs/toolkit';
import { CartState } from './cartSlice';
import { RootState } from '../store';

//створення селектора для подальшої реалізації передачі їх у компонент як пропс
type BaseStateT = (state: RootState) => CartState;

const baseState: BaseStateT = (state) => state.cartReducer;
export const cart = createSelector(baseState, (state) => state.cart);
