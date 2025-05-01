import { Suspense } from 'react';
import Spinner from '../shared/ui/Spinner/Spinner';
import ProductListWrapper from '../features/ProductListWrapper/ProductListWrapper';

export default async function Home() {
	return (
		<div className="my-10">
			<h2 className="text-center text-2xl text-black font-semibold">Product</h2>
			<Suspense fallback={<Spinner />}>
				<ProductListWrapper />
			</Suspense>
		</div>
	);
}
