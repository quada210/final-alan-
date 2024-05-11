// 1.  import the express
const express=require('express')
const mongoose=require('mongoose')
const router = express.Router();
const rest=require('./models')
const re=require('./model')
const mrng=require('./break')
const lunch=require('./Lunch')
const dinner=require('./dinner')
const cart=require('./Test')
const Order=require('./order')
const cors=require('cors');
const contact = require('./Contact');

// 2
const app=new express()
// middleware
app.use(express.urlencoded({extended:true}))
app.use (express.json())
app.use(cors())




// api for add
app.post('/add', async (req, res) => {
    const { email } = req.body;
    
    // Check if the email already exists in the database
    const existingUser = await rest.findOne({ email });
    if (existingUser) {
        return res.status(400).send("Email already exists");
        
    }

    // If email doesn't exist, save the data
    const result = new rest(req.body);
    await result.save();
    res.send("Data added");
});



    

// api for view 

app.get('/view',async(req,res)=>{
    let result=await rest.find();
    res.json(result);

})
// api for block from admin
app.delete('/remov/:id',async(req,res)=>{
    console.log(req.params);
    let id = req.params.id
    await rest.findByIdAndDelete(id);
    res.send("Deleted")
  
  })
app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    rest.findOne({email :email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("successful")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("no data existed/  incorrect email")
        }
       
})
})

// feedback adding
app.post('/add1',async(req,res)=>{
    const result=await new re(req.body);
    result.save();
    res.send("Feedback added thank you for your suggestion")
})

// taking feedback from the table
app.get('/get',(req,res)=>{
    re.find()
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
})
       

// Add mrng food
app.post('/add2',async(req,res)=>{
    const result=await new mrng(req.body);
    result.save();
    res.send("data added")
})

// taking data from mrng food
app.get('/get1',(req,res)=>{
    mrng.find()
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
})

// deleting an item from mrng food
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params);
    let id = req.params.id
    await mrng.findByIdAndDelete(id);
    res.send("Deleted")
  
  })
  
  app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await mrng.findByIdAndUpdate(id,req.body);
    res.send("updated")
    })
    
//   adding food item for lunch
app.post('/add3',async(req,res)=>{
    const result=await new lunch(req.body);
    result.save();
    res.send("data added")
})
// taking data from lunch food
app.get('/get2',(req,res)=>{
    lunch.find()
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
})

// deleting an item from lunch food
app.delete('/remove1/:id',async(req,res)=>{
    console.log(req.params);
    let id = req.params.id
    await lunch.findByIdAndDelete(id);
    res.send("Deleted")
  
  })

  app.put('/edit1/:id',async(req,res)=>{
    let id = req.params.id
    await lunch.findByIdAndUpdate(id,req.body);
    res.send("updated")
    })
    
    //   adding food item for lunch
app.post('/add4',async(req,res)=>{
    const result=await new dinner(req.body);
    result.save();
    res.send("data added")
})
// taking data from lunch food
app.get('/get3',(req,res)=>{
    dinner.find()
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
})

// deleting an item from lunch food
app.delete('/remove2/:id',async(req,res)=>{
    console.log(req.params);
    let id = req.params.id
    await dinner.findByIdAndDelete(id);
    res.send("Deleted")
  
  })

  app.put('/edit2/:id',async(req,res)=>{
    let id = req.params.id
    await dinner.findByIdAndUpdate(id,req.body);
    res.send("updated")
    })

    //cart adding
    app.post('/add5', async (req, res) => {
        try {
            const result = await new cart(req.body);
            await result.save();
            res.send("Data added");
        } catch (error) {
            if (error.code === 11000) { // Check if the error is a duplicate key error
                res.status(400).send("This item is already in the cart.");
            } else {
                res.status(500).send("Internal Server Error");
            }
        }
    });
    

//view in cart page
app.get('/get5',(req,res)=>{
    cart.find()
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
})
// adding item to order

app.post('/add6', async (req, res) => {
    try {
        const { foodItems, totalPrice ,email} = req.body;

        // Create a new Order instance with the received data
        const order = new Order({
            foodItems: foodItems,
            totalPrice: totalPrice,
            email:email
        });

        // Save the order to the database
        await order.save();
        
        // Log foodItems and totalPrice
        console.log("Food items:", foodItems);
        console.log("Total price:", totalPrice);

        res.send("Order placed successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.delete('/removeAll', async (req, res) => {
    try {
        // Remove all documents from the collection
        await cart.deleteMany({});

        // Respond with success message
        res.status(200).json({ message: 'All data removed successfully.' });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error.' });
    }
});


app.get('/get6',(req,res)=>{
    Order.find()
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
})

//adding data to contact as 
app.post('/add7',async(req,res)=>{
    const result=await new contact(req.body);
    result.save();
    res.send("Your message added Thank you for your message")
})
// get data form contact as

app.get('/get7',(req,res)=>{
    contact.find()
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
})



// create a localhost port

app.listen(4040,()=>{
    console.log("port is running at 4040")
})