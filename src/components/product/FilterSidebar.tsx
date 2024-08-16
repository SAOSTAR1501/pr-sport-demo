// src/components/product/FilterSidebar.tsx
"use client";

import { useProductContext } from "@/context/ProductContext";

const categories = ["Giày", "Quần áo", "Phụ kiện"]; // Thay bằng danh sách category thực tế của bạn

const FilterSidebar: React.FC<{ className?: string }> = ({ className }) => {
  const { filters, setFilters } = useProductContext();

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === category ? "" : category,
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={className}>
      <h2 className="text-xl font-bold mb-4">Bộ lọc</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Danh mục</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category}
              checked={filters.category === category}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Giá</h3>
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handlePriceChange}
          placeholder="Giá tối thiểu"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handlePriceChange}
          placeholder="Giá tối đa"
          className="w-full mb-2 p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
