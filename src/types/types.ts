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
    quantity: number;
}

export interface ContextType {
    products: Product[];
    addToCart: (product: Product) => void;
    clearCart: () => void;
    toggleCart: () => void;
    incrementAmount: (product: Product) => void;
    decrementAmount: (product: Product) => void;
    cart: Product[]
    error: boolean, 
    loading: boolean, 
}