import express from 'express';
import controller from '../controllers/users.controllers.js'
import auth from '../middleware.js'

const router = express.Router();


router.get('/',auth, controller.getAll);
router.post('/',auth, controller.create);
router.put('/:username',auth, controller.update);
router.delete('/:username',auth, controller.remove);

export default router;