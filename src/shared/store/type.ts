import { IProduct } from '../../entities/product/model/product';

export interface ICart extends IProduct {
	quantity: number;
}
