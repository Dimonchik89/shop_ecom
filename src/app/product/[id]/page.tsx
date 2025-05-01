import React, { Suspense } from 'react';
import Container from '../../../shared/ui/Container/Container';
import ProductPage from '../../../features/ProductPage/ProductPage';
import Spinner from '../../../shared/ui/Spinner/Spinner';

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	return (
		<div>
			<Container>
				<Suspense fallback={<Spinner />}>
					<ProductPage productId={id} />
				</Suspense>
			</Container>
		</div>
	);
};

export default Product;
