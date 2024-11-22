import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ShopList.css'; // تأكد من استيراد ملف CSS الخاص بـ ShopList

const ShopList = ({ productItems, handleLikeToggle }) => {
  return (
    <div className="shop-list">
      <div className="product-list"> {/* إضافة div لتطبيق الأنماط */}
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

export default ShopList;