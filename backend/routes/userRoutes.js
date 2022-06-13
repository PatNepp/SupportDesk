const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userController')

//When using a controller, you can plug in functions instead of typing them into the route
router.post('/', registerUser)
// router.post('/', (req, res) => {
//     res.send('register route')
// })

router.post('/login', loginUser)
// router.post('/login', (req, res) => {
//     res.send('login route')
// })

module.exports = router