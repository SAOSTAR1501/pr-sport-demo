// src/app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const categories = searchParams.get('categories')?.split(',') || [];
    const minPrice = searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!, 10) : null;
    const maxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!, 10) : null;

    // Giả lập dữ liệu sản phẩm, trong thực tế sẽ fetch từ database
    let products = [
        { id: '1', name: 'Giày chạy bộ Pro', price: 1500000, image: '/images/shoes-pro.jpg', category: 'Giày chạy bộ' },
        { id: '2', name: 'Áo thun thể thao', price: 350000, image: '/images/tshirt-sport.jpg', category: 'Quần áo' },
        { id: '3', name: 'Quần short chạy bộ', price: 450000, image: '/images/shorts-run.jpg', category: 'Quần áo' },
        { id: '4', name: 'Vớ chạy bộ cao cấp', price: 150000, image: '/images/socks-premium.jpg', category: 'Phụ kiện' },
        // Thêm nhiều sản phẩm khác ở đây
    ];

    // Áp dụng bộ lọc
    if (categories.length > 0) {
        products = products.filter(product => categories.includes(product.category));
    }
    if (minPrice !== null) {
        products = products.filter(product => product.price >= minPrice);
    }
    if (maxPrice !== null) {
        products = products.filter(product => product.price <= maxPrice);
    }

    return NextResponse.json({ products });
}