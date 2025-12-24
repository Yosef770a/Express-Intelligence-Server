import express from 'express';
import controller from '../controllers/agents.controller.js'
import auth from '../middleware.js'

const router = express.Router();


router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/',auth, controller.create);
router.put('/:id',auth, controller.update);
router.delete('/:id',auth, controller.remove);

export default router;