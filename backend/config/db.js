import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://riyaztech:riyaztech818@cluster0.n8xqm.mongodb.net/food-del').then(()=>console.log("DB Connected successfully"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.