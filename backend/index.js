const port=4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");
const { stringify } = require("querystring");

app.use(express.json());
app.use(cors());

//Database connection with MongoDB
mongoose.connect("mongodb+srv://greatstackdev:a7shop@cluster0.mwq7kfw.mongodb.net/A7_SHOPPING_SYSTEM");

//API creation
app.get("/",(req,res)=>{
    res.send("Express App is running")
})

//Image storage engine
const storage=multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})

//creating upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating products
const Product=mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async (req,res)=>{
    //id automatically generated in database
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

app.post('/removeproduct', async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name:req.body.name
    })
})

app.get('/allproducts',async (req,res)=>{
    let products=await Product.find({});
    console.log("All products Fetched");
    res.send(products);
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port "+port)
    }
    else{
        console.log("Error: "+error)
    }
})

//add user 
const User = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//signup
app.post('/signup', async(req,res)=>{
    let check = await User.findOne({email : req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"Email already exists"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++){
        cart[i] = 0;
    }
    const user = new User({
        name : req.body.name ,
        email : req.body.email ,
        password : req.body.password,
        cartData : cart,
    })
    await user.save();
    const data = {
        user:{
            id:user.id,
        }
    }
    const token = jwt.sign(data, 'secret_Tech');
    res.json({success:true, token});
}) 

//login
app.post("/login",async(req,res) =>{
    const user = await User.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_Tech');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:'Wrong password! Please try again.'});
        }
    }
    else{
        res.json({success:false,errors:"Wrong email! Please try again."});
    }
})
