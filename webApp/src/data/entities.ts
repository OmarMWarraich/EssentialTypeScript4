// Creating the Data Model

// The application will retrieve its list of products from a web service using an HTTP 
// request. The user will be able to select products to assemble an order, which will be
// sent back to the web service using another HTTP request. 

// src/data/entities.ts


export type Product = {
    id: number,
    name: string, 
    description: string,
    category: string,
    price: number
};

export class OrderLine {
    constructor(public product: Product, public quantity: number){
        // no statements required
    }

    get total(): number {
        return this.product.price * this.quantity;
    }
}

export class Order {
    private lines = new Map<number, OrderLine>();

    constructor(initialLines?: OrderLine[]) {
        if (initialLines) {
            initialLines.forEach(ol => this.lines.set(ol.product.id, ol));
        }
    }

    public addProduct(prod: Product, quantity: number) {
        if (this.lines.has(prod.id)) {
            if ( quantity === 0) {
                this.removeProduct(prod.id);
            } else {
                this.lines.get(prod.id)!.quantity += quantity;
            }
        } else {
            this.lines.set(prod.id, new OrderLine(prod, quantity));
        }
    }

    public removeProduct(id: number) {
        this.lines.delete(id);
    }

    get orderlines(): OrderLine[] {
        return [...this.lines.values()]        
    }

    get ProductCount(): number {
        return [...this.lines.values()]
            .reduce((total, ol) => total += ol.quantity, 0)
    }

    get total(): number {
        return [...this.lines.values()].reduce((total, ol) => total += ol.total, 0)
    }
}

// The Product, Order and OrderLine types are all exported so they can be used outside of 
// the code file. The Order class represents the user's product selections, each of which
// is expressed as an OrderLines object that combines a Product and a quantity. Product 
// defined as a type alias as this will simplify working with data obtained remotely. The
// Order and OrderLine types are defeined as classes as they define additional features
// beyond being a collection of related properties.

