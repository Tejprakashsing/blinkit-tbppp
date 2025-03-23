import express from 'express';
import multer from 'multer';
import Product from '../models/product.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const convertBufferToBase64 = (buffer) => {
  return buffer.toString('base64');
};

// Add a new product
router.post('/add', upload.single('image'), async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file;

  try {
    const imageBase64 = convertBufferToBase64(image.buffer);

    const newProduct = new Product({
      name,
      description,
      price, // Include the price in the schema
      image: {
        data: imageBase64,
        contentType: image.mimetype,
      },
    });

    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully!', product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithBase64Images = products.map((product) => ({
      ...product.toObject(),
      image: product.image ? `data:${product.image.contentType};base64,${product.image.data}` : null,
    }));

    res.status(200).json(productsWithBase64Images);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Get product image by ID
router.get('/product-image/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product || !product.image || !product.image.data) {
      return res.status(404).json({ message: 'Image not found' });
    }

    const base64Image = `data:${product.image.contentType};base64,${product.image.data}`;
    res.status(200).json({ base64Image });
  } catch (error) {
    console.error('Error fetching product image:', error);
    res.status(500).json({ message: 'Error fetching product image' });
  }
});

export default router;