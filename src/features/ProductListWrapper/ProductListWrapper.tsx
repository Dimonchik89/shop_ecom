import React from 'react';
import Error from '../../shared/ui/Error/Error';
import { IProduct } from '../../entities/product/model/product';
import ProductList from '../ProductList/ProductList';

// обгортка в якій отримуємо дані із сервера. ззаду для правильної роботи компонента Suspense.
const ProductListWrapper = async () => {
	// надсилання запиту для отримання продуктiв. Використовую звичайний fetch запит а не rtk-query або createAsyncThunk для того, щоб працювала індексація сайту (запит відбувається на стороні сервера завдяки цьому, а не на стороні клієнта) + реалізовано кешування даних
	const res = await fetch(`${process.env.BASE_URL}products`, { cache: 'force-cache' });
	if (!res.ok) {
		return <Error message={`${res.status}`} />;
	}
	const products: IProduct[] = await res.json();

	return <ProductList products={products} />;
};

export default ProductListWrapper;
