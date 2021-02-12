const express = require('express');
const upload = require('../middlewares/upload.js');
const validation = require('../middlewares/validation.js');
const RegisterControllers = require('../controllers/registerConroller.js');

const router = express.Router();

//Registeration Routers

router.get('/', (req, res) => {
  res.send('zoma');
});
router.get('/status', (req, res) => {
  res.send('yes');
});

router.post('/register', upload.single('thumbnail'), validation, RegisterControllers.createRegister);

module.exports = router;
