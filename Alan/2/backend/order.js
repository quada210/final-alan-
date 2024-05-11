const mongoose = require("mongoose");

// mongoose connection
mongoose
    .connect("mongodb+srv://alan80904:Pallivathukkal@cluster0.ohehot2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("DB connected"))
    .catch(err => console.error("DB connection error:", err));

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    foodItems: Array,
    totalPrice: Number,
    email:String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;