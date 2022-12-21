import { Router } from 'express';
import { verifyToken } from '../middlewares/authJwt.js';

const router = Router();

import {
  getData,
  getDataByID,
  createData,
  updateDataByID,
  deleteDataByID,
} from '../controllers/data.controllers';

router.get('/',[verifyToken], getData);
router.get('/:dataId', [verifyToken], getDataByID);
router.post('/', [verifyToken], createData);
router.put('/:dataId', [verifyToken], updateDataByID);
router.delete('/:dataId', [verifyToken], deleteDataByID);

export default router;
