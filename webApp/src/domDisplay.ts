import { Product, Order } from "./data/entities";

export class DomDisplay {

    props: {
        products: Product[],
        order: Order
    }

    getContent(): HTMLElement {
        let elem = document.createElement("h3");
        elem.innerText = this.getElementText();
        elem.classList.add("bg-primary", "text-center", "text-white", "p-2");
        return elem;
    }

    getElementText() {
        return `${this.props.products.length} Products,`
            + `Order total: $${ this.props.order.total }`;
    }
}

// The DomDisplay class defines a getContent method whose resulr is an HTMLElement object,
// which is the type used by the DOM API to represent an HTML element. The getContent 
// method cerates an H3 element and uses a template string to set its content. The element
// is added to four classes, which will be used to manage the appearance of the element when
// it is displayed. The data values used in the template string are provided through a property
// named props. 