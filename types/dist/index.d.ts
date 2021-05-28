declare type Product = {
    id: number;
    name: string;
    price?: number;
};
declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare let hat: {
    id: number;
    name: string;
    price: number;
};
declare let gloves: {
    id: number;
    name: string;
    price: number;
};
declare let umbrella: {
    id: number;
    name: string;
    price: number;
};
declare let bob: {
    id: string;
    name: string;
    city: string;
};
declare let dataItems: (Product | Person)[];
