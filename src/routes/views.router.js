import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('vistaPrincipal');
})

router.get('/productos', (req, res) => {
    res.render('productos');
})

export default router;