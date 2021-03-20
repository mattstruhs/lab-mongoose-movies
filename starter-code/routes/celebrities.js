const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrities');


router.get('/celebrities', (req, res, next)=>{
    res.render('celebrities/new')

})

router.post('/celebrities/new', (req, res, next)=>{
  const {celebName:name, celebOccupation:occupation, celebCatchPhrase:catchPhrase} = req.body;
  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  })
  .then(()=>{
    res.redirect('/')
  })
  .catch((err)=>{

  })

})


module.exports = router;