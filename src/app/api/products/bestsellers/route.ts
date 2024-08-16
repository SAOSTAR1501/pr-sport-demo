import { NextResponse } from 'next/server';

export async function GET() {
    // Giả lập dữ liệu bestsellers, trong thực tế sẽ fetch từ database
    const bestsellers = [
        { id: '1', name: 'Giày chạy bộ Pro', price: 1500000, image: '/images/shoes-pro.jpg' },
        { id: '2', name: 'Áo thun thể thao', price: 350000, image: '/images/tshirt-sport.jpg' },
        { id: '3', name: 'Quần short chạy bộ', price: 450000, image: '/images/shorts-run.jpg' },
        { id: '4', name: 'Vớ chạy bộ cao cấp', price: 150000, image: '/images/socks-premium.jpg' },
    ];

    return NextResponse.json({ products: bestsellers });
}