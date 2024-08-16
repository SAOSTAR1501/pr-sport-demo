// src/app/api/products/route.ts
import { NextResponse } from 'next/server';

const products = [
    { id: 1, name: 'Áo thun chạy bộ nam', price: 399000, image: '/images/product1.jpg', category: 'men' },
    { id: 2, name: 'Quần short nữ', price: 299000, image: '/images/product2.jpg', category: 'women' },
    { id: 3, name: 'Giày chạy bộ', price: 1299000, image: '/images/product3.jpg', category: 'shoes' },
    { id: 4, name: 'Áo khoác gió', price: 599000, image: '/images/product4.jpg', category: 'men' },
    // Thêm nhiều sản phẩm khác ở đây
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    let filteredProducts = [...products];

    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (minPrice) {
        filteredProducts = filteredProducts.filter(product => product.price >= Number(minPrice));
    }

    if (maxPrice) {
        filteredProducts = filteredProducts.filter(product => product.price <= Number(maxPrice));
    }

    return NextResponse.json({ products: filteredProducts });
}