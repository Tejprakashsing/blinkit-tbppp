import { Router } from 'express';
import multer from 'multer';
import { addProduct, getProducts, getProductImage } from '../controllers/productController.js';

const productRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

productRouter.post('/add', upload.single('image'), addProduct);
productRouter.get('/', getProducts);
productRouter.get('/product-image/:id', getProductImage);

export default productRouter;
