const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controllers/userController')
// to use protect just put it in the parenthesis as second argument
const {protect} = require('../middleware/authMiddleware')

//When using a controller, you can plug in functions instead of typing them into the route
router.post('/', registerUser)
// router.post('/', (req, res) => {
//     res.send('register route')
// })

router.post('/login', loginUser)
// router.post('/login', (req, res) => {
//     res.send('login route')
// })
router.get('/me',protect, getMe)

module.exports = router