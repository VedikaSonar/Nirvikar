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

export const getProducts = async (search = '') => {
  try {
    const url = search 
      ? `${BASE_URL}/products?search=${encodeURIComponent(search)}` 
      : `${BASE_URL}/products`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    if (data.products) {
      data.products = data.products.map(product => ({
        ...product,
        selling_price: product.selling_price ? parseFloat(product.selling_price) : product.selling_price,
        mrp_price: product.mrp_price ? parseFloat(product.mrp_price) : product.mrp_price
      }));
    }
    return data;
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
    const product = await response.json();
    if (product) {
      product.selling_price = product.selling_price ? parseFloat(product.selling_price) : product.selling_price;
      product.mrp_price = product.mrp_price ? parseFloat(product.mrp_price) : product.mrp_price;
    }
    return product;
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
