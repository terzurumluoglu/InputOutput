export class Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    star: number

    constructor(id: number, name: string, description: string, image: string, price: number, quantity: number, star: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.quantity = quantity;
        this.star = star;
    }
}

export class ProductsList {
    private _products: Product[] = [];
    private createProduct(id: number, name: string, description: string, image: string, price: number, quantity: number, star: number): Product {
        let product: Product = new Product(id, name, description, image, price, quantity, star);
        return product;
    }
    public getAllProducts(): Product[] {
        return this._products;
    }
    public getProduct(id: number): Product {
        return this._products.find(p => p.id == id);
    }
    constructor() {
        for (let i = 1; i <= 10; i++) {
            let price: number = 994.5 + i*10;
            let name: string = 'Product ' + i.toString();
            let description: string = name + ' : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim dolor, maximus vitae elit non, hendrerit egestas ligula. Aenean vulputate ligula diam, sed scelerisque est porttitor non.';
            let image: string = 'https://i.picsum.photos/id/' + (i - 1).toString() + '/300/200.jpg';
            this._products.push(this.createProduct(i, name, description, image, price, 10, i % 6));
        }
    }
}