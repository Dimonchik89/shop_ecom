import { NextResponse } from 'next/server';
import { instruments } from '../../../shared/lib/mocks/products';

// ендпоiнт для отримання списку продуктiв
export async function GET() {
	return NextResponse.json(instruments);
}
