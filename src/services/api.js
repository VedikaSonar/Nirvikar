const BASE_URL = 'http://localhost:5000/api';
const UPLOADS_URL = 'http://localhost:5000';

export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return { products: [], total: 0 };
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
};

export const createInquiry = async (inquiryData) => {
  try {
    const response = await fetch(`${BASE_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit inquiry');
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return { success: false, message: error.message };
  }
};

export const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith('http')) return imagePath;
  // If path starts with /uploads, just append to base
  if (imagePath.startsWith('/uploads')) return `${UPLOADS_URL}${imagePath}`;
  // If just filename or uploads/..., ensure slash
  return `${UPLOADS_URL}/${imagePath.replace(/^\/+/, '')}`;
};
