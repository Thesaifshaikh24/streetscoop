import React, { useState } from 'react';
import { db, storage, auth } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import "./SupplierDashboard.css";

const ProductUpload = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [qualityStatus, setQualityStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image.");
      return;
    }

    try {
      // Upload image to Firebase Storage
      const imageRef = ref(storage, `products/${Date.now()}-${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Add product to Firestore
      const product = {
        name,
        description,
        price,
        imageUrl,
        qualityStatus,
        supplierId: auth.currentUser?.uid,
      };

      await addDoc(collection(db, "products"), product);
      alert("✅ Product added successfully!");
      
      // Clear form
      setName('');
      setDescription('');
      setPrice('');
      setImage(null);
      setQualityStatus('');
    } catch (error) {
      console.error("❌ Full error:", error);
      alert(`❌ Failed to add product: ${error.message}`);
    }
  };

  return (
    <div className="supplier-dashboard">
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <select
          value={qualityStatus}
          onChange={(e) => setQualityStatus(e.target.value)}
          required
        >
          <option value="">Select Quality Test Status</option>
          <option value="Passed">Passed</option>
          <option value="Failed">Failed</option>
          <option value="Pending">Pending</option>
        </select>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button onClick={alert("product added successfully")} type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductUpload;
