import {Router} from 'express';
import * as productCtrl from '../controllers/products.controller';
const router = Router();

router.get('/',productCtrl.getProducts);
router.get('/:productId',productCtrl.getProductById);
router.post('/',productCtrl.createProduct);
router.put('/:productId',productCtrl. updateProductById);
router.delete('/:productId',productCtrl.deleteProductById);
export default router;