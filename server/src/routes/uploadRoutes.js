const express = require("express");
const uploadControllers = require("../controllers/uploadControllers");
const router = express.Router();


 router.post('/',uploadControllers.criar)
router.get('/',uploadControllers.listar)
    
router.get("/:id", uploadControllers.ler);
 router.put('/:id',uploadControllers.update)
 router.delete("/:id",uploadControllers.delete);

module.exports = router;