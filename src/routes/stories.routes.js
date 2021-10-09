import {Router} from 'express';
import  * as storiectrl from '../controllers/storie.controller';

const router = Router();

router.get('/',storiectrl.getStories);
router.post('/',storiectrl.createStorie);
router.get('/:id',storiectrl.getStorieById);
router.put('/:id',storiectrl.updateStorieById);
router.delete('/:id',storiectrl.deleteStorieById);

export default router;
