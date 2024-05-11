const mongoose=require("mongoose")

// mongoose
mongoose.connect("mongodb+srv://alan80904:Pallivathukkal@cluster0.ohehot2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>(
    console.log("DB connect 5")
))
.catch(err=>console.log(err))

let mongoSchema=mongoose.Schema


const userSchema=new mongoSchema({
    name:String,
    price:Number,
    image:String,
    
   
})
var dinner=mongoose.model("dinner",userSchema)
module.exports=dinner