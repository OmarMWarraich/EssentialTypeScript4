import { LocalDataSource } from "./data/localDataSource";

async function displayData(): Promise<string> {
    let ds = new LocalDataSource();
    let allProducts = await ds.getProducts("name");
    let categories = await ds.getCategories();
    let chessProducts = await ds.getProducts("name", "Chess");

    let result = "";

    allProducts.forEach(p => result += `Product: ${p.name}, ${p.category}\n`);
    categories.forEach(c => result += (`Category: ${c}\n`));
    chessProducts.forEach(p => ds.order.addProduct(p, 1));
    result += `Order total: $${ds.order.total.toFixed(2)}`;
    return result;
}

displayData().then(res => console.log(res));

// When the changes to the index.ts file are saved, the code will be compiled and the chain
// of import statements is resolved to include all the JS required by the application in the
// webpack bundle. 