var express=require('express')
var bodyParser=require('body-parser')
var mongoose = require('mongoose');
var {studentModel}=require('./models/studentModel')
mongoose.connect("mongodb://mongo:27017/docker-node-mongo",{useNewurlParser:true})
var app=express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const myObject={};
Error.captureStackTrace(myObject);
myObject.stack;
app.get('/viewall',async (req,res)=>{
    try{
        var result=await studentModel.find()
    res.json(result)
    }
    catch(error)
    {
        res.send(error)
    }
})

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/read',(req,res)=>{
    

var studentObject=new studentModel(req.body);

studentObject.save(
    (error)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.json({"status":"success"})
        }
    }
)
    res.json(studentObject)
})



app.post('/add',(req,res)=>{
    var getNum1=parseFloat(req.body.num1)
    var getNum2=parseFloat(req.body.num2)
    var result=getNum1+getNum2
    res.json({"result":result})
})
app.listen(process.env.PORT||3000,()=>{
    console.log("server started at http://localhost:3000")
})