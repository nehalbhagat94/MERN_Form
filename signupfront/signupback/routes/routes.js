const express = require('express')
const router = express.Router()
const signup_copy = require('../models/SignUpModels')


router.post('/signup',(request, response) => {
          const signup_user = new signup_copy({
               fullname: request.form.fullname,
               username: request.form.username,
               email: request.form.email,
               password: request.form.password
          })
          signup_user.save()
               .then(data => {
                    response.json(data);
               })
               .catch(error => {
                    response.json(error);
               })
     })

module.exports = router