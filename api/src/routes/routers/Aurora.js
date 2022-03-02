const { Router } = require('express');
const router = Router();
const { getTodas, getId } = require('../../controllers/index');

router.get('/', getTodas);
router.get('/:id', getId);



module.exports = router;