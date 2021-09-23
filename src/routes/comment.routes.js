import {Router} from 'express';
import  * as obractrl from '../controllers/comment.controller';

const router = Router();

router.get('/',obractrl.getComments);
router.post('/',obractrl.createComment);

export default router;
