// src/lib/api.ts
import { Product } from '@/types/product';
interface Comment {
    id: number;
    text: string;
    author: string;
    createdAt: string;
}

const generateRandomRating = () => ({
    average: Number((Math.random() * 4 + 1).toFixed(1)),
    count: Math.floor(Math.random() * 500) + 50
});
// Mẫu dữ liệu sản phẩm
const sampleProducts: Product[] = [
    {
        id: '1',
        name: 'Giày chạy bộ Pro',
        price: 1500000,
        image: '/images/running-shoes-pro.jpg',
        category: 'shoes',
        description: 'Giày chạy bộ chuyên nghiệp với công nghệ đệm tiên tiến.',
        brand: 'Nike',
        sku: 'NIKE-RUN-001',
        stock: 100,
        ratings: generateRandomRating(),
        colors: ['Đen', 'Trắng', 'Xanh dương'],
        sizes: ['39', '40', '41', '42', '43'],
        features: ['Đệm khí', 'Chống trơn trượt', 'Nhẹ'],
        relatedProducts: ['2', '3'],
        createdAt: '2023-01-15T00:00:00Z',
        updatedAt: '2023-06-20T00:00:00Z',
    },
    {
        id: '2',
        name: 'Áo thun thể thao nam',
        price: 350000,
        image: '/images/mens-sport-tshirt.jpg',
        category: 'men',
        description: 'Áo thun thể thao nam chất liệu thoáng khí, thấm hút mồ hôi tốt.',
        brand: 'Adidas',
        sku: 'AD-MTEE-002',
        stock: 200,
        ratings: generateRandomRating(),
        colors: ['Đen', 'Trắng', 'Xám'],
        sizes: ['S', 'M', 'L', 'XL'],
        features: ['Thoáng khí', 'Chống tia UV', 'Co giãn 4 chiều'],
        relatedProducts: ['4', '6'],
        createdAt: '2023-02-10T00:00:00Z',
        updatedAt: '2023-07-05T00:00:00Z',
    },
    {
        id: '3',
        name: 'Quần short nữ',
        price: 280000,
        image: '/images/women-sport-shorts.jpg',
        category: 'women',
        description: 'Quần short thể thao nữ, thiết kế năng động, thoải mái.',
        brand: 'Under Armour',
        sku: 'UA-WSHORT-003',
        stock: 150,
        ratings: generateRandomRating(),
        colors: ['Đen', 'Hồng', 'Xanh mint'],
        sizes: ['S', 'M', 'L'],
        features: ['Co giãn', 'Túi zip', 'Vải nhẹ'],
        relatedProducts: ['5', '7'],
        createdAt: '2023-03-20T00:00:00Z',
        updatedAt: '2023-08-01T00:00:00Z',
    },
    {
        id: '4',
        name: 'Túi đeo chéo thể thao',
        price: 450000,
        image: '/images/sport-crossbody-bag.jpg',
        category: 'accessories',
        description: 'Túi đeo chéo thể thao nhỏ gọn, tiện lợi cho các hoạt động ngoài trời.',
        brand: 'Puma',
        sku: 'PUMA-BAG-004',
        stock: 80,
        ratings: generateRandomRating(),
        colors: ['Đen', 'Xanh navy', 'Cam'],
        sizes: ['One size'],
        features: ['Chống nước', 'Nhiều ngăn', 'Dây đeo điều chỉnh'],
        relatedProducts: ['1', '8'],
        createdAt: '2023-04-05T00:00:00Z',
        updatedAt: '2023-08-15T00:00:00Z',
    },
    {
        id: '5',
        name: 'Áo khoác gió nữ',
        price: 750000,
        image: '/images/women-windbreaker.jpg',
        category: 'women',
        description: 'Áo khoác gió nữ nhẹ, chống nước, phù hợp cho các hoạt động ngoài trời.',
        brand: 'The North Face',
        sku: 'TNF-WJACKET-005',
        stock: 120,
        ratings: generateRandomRating(),
        colors: ['Đỏ', 'Xanh lá', 'Trắng'],
        sizes: ['S', 'M', 'L', 'XL'],
        features: ['Chống nước', 'Gấp gọn', 'Có mũ trùm'],
        relatedProducts: ['3', '7'],
        createdAt: '2023-05-12T00:00:00Z',
        updatedAt: '2023-09-01T00:00:00Z',
    },
    {
        id: '6',
        name: 'Giày bóng rổ nam',
        price: 2200000,
        image: '/images/mens-basketball-shoes.jpg',
        category: 'shoes',
        description: 'Giày bóng rổ nam cao cấp, đệm tốt, hỗ trợ mắt cá chân.',
        brand: 'Jordan',
        sku: 'JOR-BBALL-006',
        stock: 60,
        ratings: generateRandomRating(),
        colors: ['Đen/Đỏ', 'Trắng/Xanh', 'Xám/Cam'],
        sizes: ['40', '41', '42', '43', '44', '45'],
        features: ['Đệm Air', 'Cổ cao', 'Đế chống trơn'],
        relatedProducts: ['1', '2'],
        createdAt: '2023-06-18T00:00:00Z',
        updatedAt: '2023-09-10T00:00:00Z',
    },
    {
        id: '7',
        name: 'Áo bra thể thao',
        price: 320000,
        image: '/images/sports-bra.jpg',
        category: 'women',
        description: 'Áo bra thể thao nữ, hỗ trợ tốt, thoáng khí cho các hoạt động cường độ cao.',
        brand: 'Lululemon',
        sku: 'LULU-BRA-007',
        stock: 180,
        ratings: generateRandomRating(),
        colors: ['Đen', 'Hồng', 'Xanh dương'],
        sizes: ['S', 'M', 'L'],
        features: ['Hỗ trợ cao', 'Thoáng khí', 'Dây vai có thể điều chỉnh'],
        relatedProducts: ['3', '5'],
        createdAt: '2023-07-22T00:00:00Z',
        updatedAt: '2023-09-20T00:00:00Z',
    },
    {
        id: '8',
        name: 'Bình nước thể thao',
        price: 180000,
        image: '/images/sports-water-bottle.jpg',
        category: 'accessories',
        description: 'Bình nước thể thao cao cấp, giữ nhiệt tốt, dung tích 750ml.',
        brand: 'Hydroflask',
        sku: 'HYDRO-BOT-008',
        stock: 250,
        ratings: generateRandomRating(),
        colors: ['Đen', 'Bạc', 'Xanh dương'],
        sizes: ['750ml'],
        features: ['Giữ nhiệt 24h', 'Không BPA', 'Nắp flip-top'],
        relatedProducts: ['4'],
        createdAt: '2023-08-05T00:00:00Z',
        updatedAt: '2023-09-25T00:00:00Z',
    },
    {
        id: '9',
        name: 'Quần dài tập yoga',
        price: 550000,
        image: '/images/yoga-pants.jpg',
        category: 'women',
        description: 'Quần dài tập yoga nữ, co giãn tốt, thoải mái khi vận động.',
        brand: 'Alo Yoga',
        sku: 'ALO-YOGA-009',
        stock: 100,
        ratings: generateRandomRating(),
        colors: ['Đen', 'Xám', 'Tím nhạt'],
        sizes: ['XS', 'S', 'M', 'L'],
        features: ['Co giãn 4 chiều', 'Lưng cao', 'Túi ẩn'],
        relatedProducts: ['3', '7'],
        createdAt: '2023-09-01T00:00:00Z',
        updatedAt: '2023-09-30T00:00:00Z',
    },
    {
        id: '10',
        name: 'Găng tay tập gym',
        price: 250000,
        image: '/images/gym-gloves.jpg',
        category: 'accessories',
        description: 'Găng tay tập gym, bảo vệ tay, tăng độ bám khi tập luyện.',
        brand: 'Under Armour',
        sku: 'UA-GLOVES-010',
        stock: 150,
        ratings: generateRandomRating(),
        colors: ['Đen', 'Xám'],
        sizes: ['S', 'M', 'L', 'XL'],
        features: ['Chống trượt', 'Thoáng khí', 'Dễ tháo lắp'],
        relatedProducts: ['2', '6'],
        createdAt: '2023-09-15T00:00:00Z',
        updatedAt: '2023-10-05T00:00:00Z',
    }
];

// Mẫu dữ liệu blog posts
const sampleBlogPosts = [
    {
        slug: '5-tips-for-beginner-runners',
        title: '5 Lời khuyên cho người mới bắt đầu chạy bộ',
        date: '2024-03-15',
        category: 'Beginner Tips',
        excerpt: 'Khám phá 5 lời khuyên hữu ích giúp bạn bắt đầu hành trình chạy bộ một cách an toàn và hiệu quả.',
        coverImage: '/images/beginner-runner.jpg',
    },
    // ... các bài viết khác
];

export async function getBlogPosts() {
    // Trong môi trường production, bạn có thể fetch dữ liệu từ API thực tế ở đây
    return sampleBlogPosts;
}

export async function getBlogPostBySlug(slug: string) {
    const post = sampleBlogPosts.find(post => post.slug === slug);
    if (!post) return null;

    // Trong thực tế, bạn sẽ fetch nội dung đầy đủ của bài viết từ API
    return {
        ...post,
        content: '<p>Nội dung bài viết sẽ được fetch từ API trong môi trường thực tế.</p>'
    };
}

export async function getBlogCategories() {
    const categories = Array.from(new Set(sampleBlogPosts.map((post) => post.category)));
    return categories;
}

export async function getProducts(filters: {
    category?: string;
    minPrice?: string;
    maxPrice?: string;
}): Promise<Product[]> {
    let filteredProducts = [...sampleProducts];

    if (filters.category) {
        filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }

    if (filters.minPrice) {
        const minPrice = parseFloat(filters.minPrice);
        if (!isNaN(minPrice)) {
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice);
        }
    }

    if (filters.maxPrice) {
        const maxPrice = parseFloat(filters.maxPrice);
        if (!isNaN(maxPrice)) {
            filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
        }
    }

    return filteredProducts;
}

export async function getProductById(id: string): Promise<Product | undefined> {
    return sampleProducts.find(product => product.id === id);
}

export async function getProductCategories(): Promise<string[]> {
    return Array.from(new Set(sampleProducts.map(product => product.category)));
}

export async function getComments(postSlug: string): Promise<Comment[]> {
    // Trong thực tế, bạn sẽ gọi API để lấy comments
    // Đây là dữ liệu mẫu
    return [
        { id: 1, text: "Bài viết rất hữu ích!", author: "User1", createdAt: new Date().toISOString() },
        { id: 2, text: "Tôi đã học được nhiều điều mới.", author: "User2", createdAt: new Date().toISOString() },
    ];
}

export async function postComment(postSlug: string, text: string, author: string): Promise<Comment> {
    // Trong thực tế, bạn sẽ gọi API để đăng comment
    // Đây là logic mẫu
    const newComment = {
        id: Date.now(),
        text,
        author,
        createdAt: new Date().toISOString(),
    };

    // Giả lập delay của network request
    await new Promise(resolve => setTimeout(resolve, 500));

    return newComment;
}

interface Review {
    id: number;
    productId: string;
    rating: number;
    comment: string;
    author: string;
    createdAt: string;
}

export async function getProductReviews(productId: string): Promise<Review[]> {
    const response = await fetch(`/api/products/${productId}/reviews`);
    if (!response.ok) {
        throw new Error('Failed to fetch reviews');
    }
    return response.json();
}

export async function postProductReview(productId: string, rating: number, comment: string, token: string): Promise<Review> {
    const response = await fetch(`/api/products/${productId}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ rating, comment })
    });

    if (!response.ok) {
        throw new Error('Failed to post review');
    }

    return response.json();
}

export async function getWishlist(token: string): Promise<string[]> {
    const response = await fetch('/api/wishlist', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch wishlist');
    }
    return response.json();
}

export async function addToWishlist(productId: string, token: string): Promise<void> {
    const response = await fetch('/api/wishlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productId })
    });
    if (!response.ok) {
        throw new Error('Failed to add to wishlist');
    }
}

export async function removeFromWishlist(productId: string, token: string): Promise<void> {
    const response = await fetch(`/api/wishlist/${productId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to remove from wishlist');
    }
}

interface SearchFilters {
    query: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc';
}

export async function searchProducts(filters: SearchFilters): Promise<Product[]> {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
            params.append(key, value.toString());
        }
    });

    const response = await fetch(`/api/products/search?${params.toString()}`);
    if (!response.ok) {
        throw new Error('Failed to search products');
    }
    return response.json();
}

export async function rateProduct(productId: string, rating: number, token: string): Promise<void> {
    const response = await fetch(`/api/products/${productId}/rate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ rating })
    });

    if (!response.ok) {
        throw new Error('Failed to submit rating');
    }
}