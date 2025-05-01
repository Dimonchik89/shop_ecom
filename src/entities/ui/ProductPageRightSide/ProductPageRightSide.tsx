'use client';
import React from 'react';
import Button from '../../../shared/ui/Button/Button';
import { addToCart } from '../../../shared/store/cartSlice/cartSlice';
import { AppDispatch } from '../../../shared/store/store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { ConnectedProps, connect } from 'react-redux';
import { IProduct } from '../../product/model/product';

interface ProductPageRightSideProps extends PropsFromRedux {
	product: IProduct;
}

const ProductPageRightSide: React.FC<ProductPageRightSideProps> = ({ product, addToCart }) => {
	return (
		<div className="flex flex-col gap-4 flex-auto justify-center">
			<h2 className="text-center text-2xl font-bold">{product.name}</h2>
			<p className="text-center text-md">{product.description}</p>
			<div className="flex justify-center items-center gap-5">
				<p className="text-center text-lg font-semibold">{product.price}₴</p>
				<Button handleClick={() => addToCart(product)} title="Додати в кошик" />
			</div>
		</div>
	);
};

// отримання екшинів зі слайсу та передача його в компонент як пропс
const mapDispatchToProps = (dispatch: AppDispatch) => ({
	addToCart: bindActionCreators(addToCart, dispatch),
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductPageRightSide);
