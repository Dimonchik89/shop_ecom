import React from 'react';
import Error from '../../shared/ui/Error/Error';
import { IProduct } from '../../entities/product/model/product';
import Image from 'next/image';
import ProductPageRightSide from '../../entities/ui/ProductPageRightSide/ProductPageRightSide';

interface ProductPageProps {
	productId: string;
}

const ProductPage = async ({ productId }: ProductPageProps) => {
	// надсилання запиту для отримання одного продукту. Використовую звичайний fetch запит а не rtk-query або createAsyncThunk для того, щоб працювала індексація сайту (запит відбувається на стороні сервера завдяки цьому, а не на стороні клієнта) + реалізовано кешування даних
	const res = await fetch(`${process.env.BASE_URL}product/${productId}`, { cache: 'force-cache' });
	if (!res.ok) {
		return <Error message={`${res.status}`} />;
	}
	const product: IProduct = await res.json();

	return (
		<div className="my-10">
			<div className="flex gap-10 flex-col lg:flex-row align-center">
				<div className="min-w-auto lg:min-w-[500px] mx-auto">
					<Image src={product.img} alt={product.name} width={500} height={500} />
				</div>
				<ProductPageRightSide product={product} />
			</div>
		</div>
	);
};

export default ProductPage;
