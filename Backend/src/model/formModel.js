const mongoose=require("mongoose")
const FormSchema=new mongoose.Schema({
    fname:{type:String},
    lname:{type:String},
    address:{type:String},
    pincode:{type:String},
    monumber:{type:String},
},{timestamps:true})

module.exports=mongoose.model("formdata",FormSchema)