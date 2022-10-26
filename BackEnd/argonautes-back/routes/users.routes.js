var express = require('express');
var router = express.Router();

const userCtrl = require("../controllers/userCtrl") 

/* GET users listing. */
router.post('/',userCtrl.addUser);
router.get('/',userCtrl.getUser);

module.exports = router;
