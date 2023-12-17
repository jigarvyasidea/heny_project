const express = require('express');
//function 
const app  = express();
//jab bhi function they give object 

app.get('/search ' , ()=>{
    console.log('hi ')
})



app.listen(8080 , ()=>{
    console.log('first');
}); 

