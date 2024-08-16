// src/components/blog/SearchBar.tsx
"use client"; // This directive indicates that this is a Client Component

import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar: FC = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/blog?search=${encodeURIComponent(search)}`);
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm bài viết..."
          className="w-full p-2 border rounded-lg"
        />
      </form>
    </div>
  );
};

export default SearchBar;
