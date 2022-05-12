const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('user')
  res.send('user')
})

module.exports = router
