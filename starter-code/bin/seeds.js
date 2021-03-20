const mongoose = require('mongoose');
const Celebrity = require('../models/celebrities');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebsArray = [
  {
    name: 'Celebrity One',
    occupation: 'action actor',
    catchPhrase: 'I will be back'
  },
  {
    name: 'Celebrity Two',
    occupation: 'drama actor',
    catchPhrase: 'I might be back'  },
  {
    name: 'Celebrity Three',
    occupation: 'comedy actor',
    catchPhrase: 'I will not be back' }
]



Celebrity.create(celebsArray)
.then(feedback=>{
  console.log(`yay it worked, see feedback "${feedback}`)
})
.catch((error)=>{
  console.log('it didnt work', error)
})