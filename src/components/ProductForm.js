import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // التحقق من صحة البيانات
    if (!name || !description || !price || !image) {
      alert("All fields are required");
      return;
    }

    const newProduct = { name, description, price, image };
    onAddProduct(newProduct);
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;