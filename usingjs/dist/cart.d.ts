import { SportsProduct } from './product';
export declare class Cart {
    customerName: string;
    private items;
    constructor(customerName: string);
    addProduct(product: SportsProduct, quantity: number): number;
    get totalPrice(): number;
    get itemCount(): number;
}
