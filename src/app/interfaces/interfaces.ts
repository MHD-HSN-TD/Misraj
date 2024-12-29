// interface Review {
//     rating: number;
//     comment: string;
//     date: string; // ISO date string
//     reviewerName: string;
//     reviewerEmail: string;
// }

// interface Dimensions {
//     width: number;
//     height: number;
//     depth: number;
// }

// interface Meta {
//     createdAt: string; // ISO date string
//     updatedAt: string; // ISO date string
//     barcode: string;
//     qrCode: string; // Assuming this is a string; adjust if necessary
// }

export interface ButtonProps {
    color: "primary" | "secondary"; //as the task requirements
    size: "regular" | "small" | "large"; //as the task requirements
    icon: React.ReactNode;
    onClick?: (e: any) => any; // this is not required by u ,but it's necessary to make the btn reusable as much as impossible
    children: React.ReactNode; // so btn can accept React Element
};

export interface CardProps {
    image: string; //as the task requirements
    title: string; //as the task requirements
    description?: string; //as the task requirements
    price: number; //as the task requirements
    rate: number; //as the task requirements

};

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    // dimensions: Dimensions;
    dimensions: any;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    // reviews: Review[];
    reviews: any;
    returnPolicy: string;
    minimumOrderQuantity: number;
    // meta: Meta; // Nested object
    meta: any; // Nested object
    thumbnail: string; // Assuming this is a URL or path to an image
    images: string[]; // Array of image URLs or paths
}

export interface ProductsResponse {
    products: Product[]; // Array of products
    total: number; // Total number of products available
    skip: number; // Number of products skipped (for pagination)
    limit: number; // Limit on the number of products returned in this response
}

