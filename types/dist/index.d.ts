declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare enum OtherEnum {
    First = 10,
    Two = 20
}
declare enum Product {
    Hat = 11,
    Gloves = 20,
    Umbrella = 31
}
declare let productValue: Product;
declare let unionValue: number | Product;
