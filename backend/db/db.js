const mongoose = require('mongoose');
require("dotenv").config()


mongoose.connect(process.env.MONGO_URl).then(()=>console.log("db connected")).catch((err)=>console.log("error",err));

