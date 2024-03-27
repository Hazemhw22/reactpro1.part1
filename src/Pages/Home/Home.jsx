// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10');
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data.categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <input
                type="text"
                placeholder="Search categories"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className="category-cards">
                {filteredCategories.map(category => (
                    <div key={category.id} className="category-card">
                        <img src={category.image.secure_url} alt={category.name} />
                        <h2>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
