declare enum Feature {
    Waterproof = 0,
    Insulated = 1
}
declare let hat: {
    name: string;
    price: number;
};
declare let gloves: {
    name: string;
    price: number;
};
declare let umbrella: {
    name: string;
    price: number;
    hasFeature: (feature: any) => boolean;
};
declare let products: {
    name: string;
    price?: number;
    hasFeature?(Feature: any): boolean;
}[];
