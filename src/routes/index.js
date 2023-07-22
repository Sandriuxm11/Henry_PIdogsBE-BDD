const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoutes = require("./dogsRoutes");
const temperamentsRoutes = require("./temperamentsRoutes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogsRoutes);
router.use("/temperaments", temperamentsRoutes);
router.use("*", (req, res)=>{
    res.status(404).send("Not Found");
})

module.exports = router;
