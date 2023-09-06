const express=require('express');
const app=new express();
const router=require('./src/routes/api');

const cors=require('cors');
const helmet=require('helmet');
const hpp=require('hpp');
const rateLimit=require('express-rate-limit');
const mongoSanitize=require('express-mongo-sanitize');

app.use(cors());
app.use(helmet());
app.use(hpp());


const limiter=rateLimit({
    windowMs:"15*60*1000",
    max:"30"
})
app.use(limiter);

app.use('/api/v1',router);







app.use('*',(req,res)=>{
    res.status(404).json({
        status:"fail",
        data:"no data",
    })
})
module.exports=app;