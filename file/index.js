let fs = require('fs');



// we perform cure opration 

//iske uppar jayda time waste mat karna 

// it want be used

//CREATE
//kya isme js ke alawa koi or file h .. thoda or remine karo mene bola the file system is alternative of dataabse 

//create bolo ya right bolo ek hi bbat h 

//sabse pahle muje data ko store karna h muje file to chaihiye 
//me jidi aadmi hu me file nahi bna rhah

// let data = 'Jigar '
// fs.writeFile('abc.txt', data , {

//     encoding: 'utf-8',
//     flag: 'w',

// } , (err)=>{
//    if(err){
//     throw err;
//    }

//   console.log('file written sucessfully');
// })

//et data2 = 'chage data hu me ';
//fs.writeFile('abc.txt', data2);

//Read


// fs.readFile( 'abc.txt ', {
//     encoding : 'utf-8',
//     flag: 'r',
// } , (err) =>{
//     if(err , data){
//         throw err
//     }
//     console.log(data)
// })


fs.readFileSync('abc.txt');
console.log(data);