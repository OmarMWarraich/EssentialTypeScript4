declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare enum Product {
    Hat = 0,
    Gloves = 1,
    Umbrella = 2
}
declare let products: [Product, number][];
