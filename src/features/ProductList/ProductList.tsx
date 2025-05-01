'use client';

import React, { useState } from 'react';
import { IProduct } from '../../entities/product/model/product';
import ProductCard from '../../entities/ui/ProductCard/ProductCard';
import { Swapy, createSwapy } from 'swapy';
import { useEffect, useRef } from 'react';
import { displayProductsButtons } from '../../shared/lib/mocks/buttonts';
import Button from '../../shared/ui/Button/Button';
import classNames from 'classnames';
import { ButtonEnum } from '../../shared/ui/Button/button';

interface ProductListProps {
	products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
	// функціонал для роботи drag and drop
	const swapy = useRef<Swapy | null>(null);
	const container = useRef(null);
	const [displayProducts, setDisplayProducts] = useState(displayProductsButtons[0].title);
	const [allProducts, setAllProducts] = useState<IProduct[]>(products);

	const handleChangeActiveButton = (title: ButtonEnum) => {
		setDisplayProducts(title);
	};

	// сортування продуктів у локальному стейті
	const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
		switch (e.target.value) {
			case 'low_to_high':
				setAllProducts((prev) => prev.toSorted((a, b) => a.price - b.price));
				break;
			case 'high_to_low':
				setAllProducts((prev) => prev.toSorted((a, b) => b.price - a.price));
				break;
			default:
				setAllProducts(products);
		}
	};

	// функціонал для роботи drag and drop
	useEffect(() => {
		if (container.current) {
			swapy.current = createSwapy(container.current);
		}

		return () => {
			swapy.current?.destroy();
		};
	}, []);

	return (
		<div className="mt-10">
			<div className="flex justify-between mb-3">
				<div>
					<select onChange={handleSort}>
						<option value="default">default</option>
						<option value="low_to_high">low to high</option>
						<option value="high_to_low">high to low</option>
					</select>
				</div>
				<div className="hidden sm:flex gap-3">
					{displayProductsButtons.map((item) => (
						<Button key={item.id} title={item.title} activeButton={displayProducts} handleClick={handleChangeActiveButton} />
					))}
				</div>
			</div>
			<div
				ref={container}
				className={classNames({
					'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3': displayProducts === ButtonEnum.SMALL,
					'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3': displayProducts === ButtonEnum.BIG,
					'grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-3': displayProducts === ButtonEnum.ROW,
				})}
			>
				{allProducts.map((item) => (
					<ProductCard key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
