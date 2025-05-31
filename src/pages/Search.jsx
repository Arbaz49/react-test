import React, { useState } from "react";
import PageLayout from "../HOC/PageLayout";

const mockData = [
  { id: 1, name: "iPhone 13", category: "Electronics", status: "In Stock" },
  { id: 2, name: "T-shirt", category: "Clothing", status: "Out of Stock" },
  { id: 3, name: "MacBook Pro", category: "Electronics", status: "In Stock" },
  { id: 4, name: "Jeans", category: "Clothing", status: "In Stock" },
  { id: 5, name: "Samsung Galaxy", category: "Electronics", status: "Out of Stock" },
];

const categories = ["All", "Electronics", "Clothing"];
const statuses = ["All", "In Stock", "Out of Stock"];

const SearchableFilterList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredData = mockData.filter((item) => { //this function will call anytime if state search,category,status changes
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()); //seach query
    const matchesCategory = category === "All" || item.category === category;//check if category is All else check for changed category
    const matchesStatus = status === "All" || item.status === status;//check if status is All else check for changed status
    return matchesSearch && matchesCategory && matchesStatus;
  });
  console.log(filteredData)

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Searchable List with Filters</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <div className="flex gap-2 mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-1/2"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded w-1/2"
        >
          {statuses.map((stat) => (
            <option key={stat}>{stat}</option>
          ))}
        </select>
      </div>

      <ul className="border rounded p-2 space-y-2">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.id} className="border-b pb-1">
              <strong>{item.name}</strong> <br />
              <span className="text-sm text-gray-500">{item.category} • {item.status}</span>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">No items found</li>
        )}
      </ul>
    </div>
  );
};

export default PageLayout( SearchableFilterList);
