// src/components/product/SearchForm.tsx
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.append("query", query);
    if (category) params.append("category", category);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);
    if (sortBy) params.append("sortBy", sortBy);

    router.push(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm kiếm sản phẩm..."
        className="w-full p-2 border rounded"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Tất cả danh mục</option>
        <option value="men">Nam</option>
        <option value="women">Nữ</option>
        <option value="shoes">Giày</option>
        <option value="accessories">Phụ kiện</option>
      </select>
      <div className="flex space-x-2">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Giá tối thiểu"
          className="w-1/2 p-2 border rounded"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Giá tối đa"
          className="w-1/2 p-2 border rounded"
        />
      </div>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Sắp xếp theo</option>
        <option value="price_asc">Giá tăng dần</option>
        <option value="price_desc">Giá giảm dần</option>
        <option value="name_asc">Tên A-Z</option>
        <option value="name_desc">Tên Z-A</option>
      </select>
      <button
        type="submit"
        className="w-full bg-primary text-white p-2 rounded"
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default SearchForm;
