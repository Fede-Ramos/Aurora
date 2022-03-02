const { Router } = require('express');
const AuroraRoute = require('./routers/Aurora');
const router = Router();



router.use('/auroras', AuroraRoute);



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;