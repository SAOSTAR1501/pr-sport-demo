// src/mocks/productData.ts
import { Product } from '@/types/product';

export const mockProducts: { [key: string]: Product } = {
    '1': {
        id: '1',
        name: 'Giày chạy bộ Pro',
        price: 1500000,
        image: '/images/running-shoes-pro.jpg',
        category: 'shoes',
        description: 'Giày chạy bộ chuyên nghiệp với công nghệ đệm tiên tiến.',
        brand: 'Nike',
        sku: 'NIKE-RUN-001',
        stock: 100,
        ratings: {
            average: 4.5,
            count: 120
        },
        colors: ['Đen', 'Trắng', 'Xanh dương'],
        sizes: ['39', '40', '41', '42', '43'],
        features: ['Đệm khí', 'Chống trơn trượt', 'Nhẹ'],
        relatedProducts: ['2', '3'],
        createdAt: '2023-01-15T00:00:00Z',
        updatedAt: '2023-06-20T00:00:00Z',
    },
    // Thêm các sản phẩm khác với cấu trúc tương tự
};