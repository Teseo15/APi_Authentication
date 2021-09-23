import {Router} from 'express';
import  * as obractrl from '../controllers/obra.controller';

const router = Router();

router.get('/',obractrl.getObras);
router.get('/:id',obractrl.getObraById);
router.post('/',obractrl.createObra);
router.put('/:id',obractrl.updateObraById);
router.delete('/:id',obractrl.deleteObraById);
export default router;
