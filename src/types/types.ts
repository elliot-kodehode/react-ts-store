export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number; };
}

export interface ContextType {
    products: Product[];
    addToCart: (product: Product) => void;
    cart: Product[]
}