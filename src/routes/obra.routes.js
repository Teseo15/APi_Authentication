import {Router} from 'express';
import { getObras } from '../controllers/obra.controller';

const router = Router();

router.get('/',getObras);
export default router;