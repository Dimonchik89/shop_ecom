'use client';

import React, { useEffect } from 'react';
import { IProduct } from '../../product/model/product';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../shared/ui/Button/Button';
import { increment, decrement, removeFromCart } from '../../../shared/store/cartSlice/cartSlice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { ConnectedProps, connect } from 'react-redux';
import { AppDispatch } from '../../../shared/store/store';

export interface ProductCard extends PropsFromRedux {
	length?: number;
}

export interface ProductCard extends IProduct {
	quantity?: number;
}

const ProductCard: React.FC<ProductCard> = ({ id, price, img, name, quantity, increment, decrement, removeFromCart }) => {
	useEffect(() => {
		if (quantity === 0) {
			removeFromCart(id);
		}
	}, [quantity]);

	return (
		<div data-swapy-slot={id}>
			<div data-swapy-item={id}>
				<div className="border-1 border-gray-500 rounded-xl overflow-hidden p-3 flex flex-col items-center bg-white">
					<Image src={img} alt={name} width={400} height={400} />
					<div className="flex flex-col items-center">
						<div className="flex flex-col items-center mb-3">
							<h3 className="text-black text-xl font-semibold">{name}</h3>
							<p className="text-black font-lg">{price}₴</p>
						</div>
						<Link href={`/product/${id}`} className="bg-green-500 px-3 py-1 rounded-xl text-white font-bold">
							Переглянути
						</Link>
						{quantity ? (
							<div className="flex gap-2 items-center mt-3">
								<Button title="-" handleClick={() => decrement(id)} />
								<p>{quantity}</p>
								<Button title="+" handleClick={() => increment(id)} />
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

// отримання екшинів зі слайсу та передача його в компонент як пропс
const mapDispatchToProps = (dispatch: AppDispatch) => ({
	increment: bindActionCreators(increment, dispatch),
	decrement: bindActionCreators(decrement, dispatch),
	removeFromCart: bindActionCreators(removeFromCart, dispatch),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductCard);
