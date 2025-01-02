
export interface ButtonProps {
    color: "primary" | "secondary"; //as the task requirements
    size: "regular" | "small" | "large"; //as the task requirements
    icon: React.ReactNode;
    disabled?: boolean,
    className?: string,
    onClick?: (e: any) => any; // this is not required by u ,but it's necessary to make the btn reusable as much as impossible
    children?: React.ReactNode; // so btn can accept React Element
};

export interface CardProps {
    image?: string; //as the task requirements
    title: string; //as the task requirements
    description?: string; //as the task requirements
    price: string; //as the task requirements
    rate?: number; //as the task requirements

};

export interface Product {

    id?: number;
    title: string;
    price: string;
    rating?: number;
    category: string;
    description: string;
    thumbnail?: string; // for the image
}
export interface ProductsResponse {
    products: Product[]; // Array of products
    total: number;
    skip: number;
    limit: number;
}

