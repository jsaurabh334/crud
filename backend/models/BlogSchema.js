const mongoose = require('mongoose');

const BlogSchema= new mongoose.Schema({
    title:String,
    desc:String,
},{timeseries:true})

const Blogmodel = new mongoose.model("blogmodel",BlogSchema)
module.exports = Blogmodel