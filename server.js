const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/client/build'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


if(process.env.NODE_ENV==='production'){
  app.get('/*', (req, res)=>{
    res.sendFile(__dirname+'/client/build/index.html')
  })
}

app.listen(port, () => {

});