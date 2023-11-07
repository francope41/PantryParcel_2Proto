import React from 'react';
import cat1 from '../image/fruits.png';
import cat2 from '../image/vegetables.png';
import cat3 from '../image/Chips.png';
import cat4 from '../image/juice.png';
import cat5 from '../image/BreakfastSpecial.png';
import cat6 from '../image/chocolate.png';
import cat7 from '../image/cookies.png';
import cat8 from '../image/dairy products.png';

function Category({ onCategoryClick }) {
  const categories = [
    { id: 1, image: cat1, name: "Fresh Fruits", color: '#FFE4B5' }, // Moccasin for fresh fruits
    { id: 2, image: cat2, name: "Vegetables", color: '#90EE90' }, // Light Green for vegetables
    { id: 3, image: cat3, name: "Chips", color: '#CDA4DE' }, // Thistle (Light Purple) for chips
    { id: 4, image: cat4, name: "Juice", color: '#FFA07A' }, // Light Coral (Red) for juice
    { id: 5, image: cat5, name: "Breakfast Specials", color: 'linear-gradient(45deg, #FFD700, #FF6347)' }, // Gradient from Gold to Tomato
    { id: 6, image: cat6, name: "Chocolates", color: '#CD853F' }, // Peru for chocolates
    { id: 7, image: cat7, name: "Cookies", color: '#DEB887' }, // Burlywood for cookies
    { id: 8, image: cat8, name: "Dairy Products", color: '#FFFACD' }, // Lemon Chiffon for dairy products
  ];
  
  return (
    <nav className="category-nav">
      {categories.map(category => (
        <button 
          className="category-button" 
          key={category.id} 
          onClick={() => onCategoryClick(category.name)}
          style={{ background: category.color }}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
}

export default Category;