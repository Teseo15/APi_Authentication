import {Router} from 'express';
import  * as obractrl from '../controllers/comment.controller';

const router = Router();

router.get('/',obractrl.getComments);
router.post('/',obractrl.createComment);
router.get('/:id',obractrl.getCommentById);
router.put('/:id',obractrl.updateCommentById);
router.delete('/:id',obractrl.deleteCommentById);
export default router;
