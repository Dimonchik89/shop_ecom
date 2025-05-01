'use client';
import React from 'react';
import { cart } from '../../shared/store/cartSlice/selectors';
import { createStructuredSelector } from 'reselect';
import { ConnectedProps, connect } from 'react-redux';
import ProductCard from '../../entities/ui/ProductCard/ProductCard';

const CartList: React.FC<PropsFromRedux> = ({ cart }) => {
	return (
		<div className="my-10">
			{!cart.length ? <h2 className="text-center text-xl font-semibold">Cart is empty</h2> : null}
			<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
				{cart.map((item) => (
					<ProductCard key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

//отримання даних зі стору, використовуючи функціонал createStructuredSelector щоб передавати їх у компонент як пропс
const mapStateToProps = createStructuredSelector({
	cart,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CartList);
