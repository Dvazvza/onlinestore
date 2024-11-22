import React from 'react';
import ProductCard from './ProductCard/ProductCard'; // تأكد من المسار الصحيح
import './Section.css'; // تأكد من استيراد ملف CSS

const Section = ({ title, bgColor, productItems, handleLikeToggle }) => {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <div className="product-list">
        {productItems.map((product) => (
          <ProductCard 
            key={product.id} 
            productItem={product} 
            handleLikeToggle={handleLikeToggle} // تمرير الدالة إلى ProductCard
          />
        ))}
      </div>
    </div>
  );
};

export default Section;