import { NextResponse } from 'next/server';
import { instruments } from '../../../../shared/lib/mocks/products';

// ендпоiнт для отримання одного продуктiв
export async function GET(request: Request) {
	const id = request.url.split('/').pop() as string;

	const product = instruments.find((item) => item.id === +id);

	if (!product) {
		return NextResponse.json({ message: 'Product not found' }, { status: 404 });
	}

	return NextResponse.json(product);
}
