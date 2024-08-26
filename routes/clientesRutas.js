const express = require("express")
const router = express.Router()
const clienteController = require('../controllers/clienteController')

// rutas del crud

router.post('/', clienteController.agregarClientes)
router.get("/", clienteController.mostrarClientes);


module.exports = router