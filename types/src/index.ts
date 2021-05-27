// Using Template Literal String Types

// Literal String types can be used with the JS template string
// feature to create template strings that only accept specific
// values, which can be a concise way to express complex 
// combinations of values. 

function calculatePrice(quantity: 1 | 2, price: number): number {
    return quantity * price;
}

let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);

function getRandomValue(): 1 | 2 | 3 | 4 {
    return Math.floor(Math.random() *4) + 1 as 1 | 2 | 3 | 4;
} 

function getCityString(city: "London" | "Paris" | "Chicago")
        : `City: ${"London" | "Paris" | "Chicago"}` {
            return `City: ${city}` as `City: ${"London" | "Paris" | "Chicago"}`;
        }

        let str = getCityString("London");
        console.log(str);