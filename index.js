const express=require('express')
const app=express();
const port=5000;
const  Tesseract =require('tesseract.js');
let a={};
let b;
let json;
Tesseract.recognize(
  './pan-card.jpg',
  'eng',
  { logger: m => 
  a=m }
).then(({ data: { text }}) => {
    json =text.split("\n");
   b={
    idType:json[0],
    idNumber:json[1],
    info:{
        name:json[2],
        fatherName:json[3],
    }
  }
  b=JSON.stringify(b);
console.log(b)
  return b;
})


app.get("/",(req,res)=>{
res.send(b)
})
app.listen(port,()=>{
    console.log("server start 5000")
})