// Creating the Data Source

// Lets create a class that provides access to some local test data. An abstract class
// will be defined providing the basic features and creating concrete implemntations for
// each data source to ease the trasition from local to remote data. 

import { Product, Order } from './entities';

export type ProductProp = keyof Product;

export abstract class AbstractDataSource {
    private _products: Product[];
    private _categories: Set<string>;
    public order: Order;
    public loading: Promise<void>;

    constructor() {
        this._products = [];
        this._categories = new Set<string>();
        this.order = new Order();
        this.loading = this.getData();
    }

    async getProducts(sortProp: ProductProp = "id",
            category? : string): Promise<Product[]> {
        await this.loading;
        return this.selectProducts(this._products, sortProp, category);
    }

    protected async getData(): Promise<void> {
        this._products = [];
        this._categories.clear();
        const rawData = await this.loadProducts();
        rawData.forEach(p => {
            this._products.push(p);
            this._categories.add(p.category)
        });
    }

    protected selectProducts(prods: Product[],
            sortProp: ProductProp, category?: string): Product[] {
                return prods.filter(p => category === undefined || p.category === category)
                        .sort((p1, p2) => p1[sortProp] < p2[sortProp]
                            ? -1 : p1[sortProp] > p2[sortProp] ? 1: 0);
            }
    
    async getCategories(): Promise<string[]> {
        await this.loading;
        return [...this._categories.values()];
    }

    protected abstract loadProducts(): Promise<Product[]>;
    abstract storeOrder(): Promise<number>;
    
}

// The AbstractDataSource class uses the JS Promise feature to fetch data in the background
// and uses the async/await keywords to express the code that depends on those operations.
// The class above invokes the abstract loadProducts method in the constructor and the 
// getProducts and getCalories methods wait for the background operation to produce data
// before returning any responses. To create an implementation of the data source class that
// uses local test data, lets add a file called localDataSource.ts to the data folder .