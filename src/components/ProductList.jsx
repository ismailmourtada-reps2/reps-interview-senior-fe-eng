'use client';

import React, { useState } from "react";


// Dropdown values
const categories = ["all", "men's clothing", "jewelery", "electronics", "women's clothing"];

export default function ProductList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    return (
        <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>

            <div style={{ marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginRight: "1rem", padding: "0.5rem" }}
                />

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{ padding: "0.5rem" }}
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
