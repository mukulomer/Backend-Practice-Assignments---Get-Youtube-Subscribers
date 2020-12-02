
const express = require('express');
const app = express();

const Subscriber = require("./models/subscribers");

// Your code goes here

app.get('/subscribers' , async (req,res)=>{
      
    let data = [];
    const sub =  Subscriber.find().then(sub => res.send(sub) );
    return;

});

app.get('/subscribers/names', (req, res) => {
  Subscriber.find().select({name: 1,subscribedChannel: 1}).then(subscribers => res.send(subscribers));
  return;
});
app.get('/subscribers/:id', (req, res) => {
  const id = req.params.id;
   Subscriber.find({_id : id}).then(sub => sub.map(sub => res.send(sub))  ).catch(error => res.status(400).send({message: error.message}));
  return;
});



module.exports = app;
