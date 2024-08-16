// src/types/product.ts

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    brand: string;
    sku: string;
    stock: number;
    ratings: {
        average: number;
        count: number;
    };
    colors: string[];
    sizes: string[];
    features: string[];
    relatedProducts: string[]; // IDs của các sản phẩm liên quan
    createdAt: string;
    updatedAt: string;
}

export interface ProductReview {
    id: string;
    productId: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    createdAt: string;
}

export type ProductCategory = 'men' | 'women' | 'shoes' | 'accessories';

export interface ProductFilters {
    category?: ProductCategory;
    minPrice?: number;
    maxPrice?: number;
    brand?: string[];
    color?: string[];
    size?: string[];
}

export interface ProductSortOptions {
    field: 'price' | 'name' | 'createdAt' | 'ratings.average';
    direction: 'asc' | 'desc';
}