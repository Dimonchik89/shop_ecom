'use client';
import Link from 'next/link';
import React from 'react';
import Container from '../../../shared/ui/Container/Container';
import { cart } from '../../../shared/store/cartSlice/selectors';
import { createStructuredSelector } from 'reselect';
import { ConnectedProps, connect } from 'react-redux';

const Header: React.FC<PropsFromRedux> = ({ cart }) => {
	return (
		<div className="bg-gray-500 py-3">
			<Container>
				<nav>
					<ul className="flex justify-between">
						<li>
							<Link className="text-white font-bold text-xl cursor-pointer" href="/">
								Home
							</Link>
						</li>
						<li className="relative">
							<Link className="text-white font-bold text-xl cursor-pointer" href="/cart">
								Cart
							</Link>
							<p className="absolute top-0 -right-4 bg-red-700 font-bold text-white w-5 h-5 rounded-full flex items-center justify-center opacity-75">{cart.length}</p>
						</li>
					</ul>
				</nav>
			</Container>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cart,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Header);
