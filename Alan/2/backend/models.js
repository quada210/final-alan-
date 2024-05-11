const mongoose=require("mongoose")

// mongoose
mongoose.connect("mongodb+srv://alan80904:Pallivathukkal@cluster0.ohehot2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>(
    console.log("DB connect 1")
))
.catch(err=>console.log(err))

let mongoSchema=mongoose.Schema


const userSchema=new mongoSchema({
    email:String,
    name:String,
    number:Number,
    password:String,
   
})
var rest=mongoose.model("restuser",userSchema)
module.exports=rest