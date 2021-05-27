declare function calculatePrice(quantity: 1 | 2, price: number): number;
declare let total: number;
declare type numVals = 1 | 2 | 3 | 4;
declare function getRandomValue(): numVals;
declare type cities = "London" | "Paris" | "Chicago";
declare type cityResponse = `City: ${cities}`;
declare function getCityString(city: cities): cityResponse;
declare let str: "City: London" | "City: Paris" | "City: Chicago";
