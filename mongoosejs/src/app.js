const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/connectUs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successfull........"))
  .catch((err) => console.log(err));

const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  message: String,
});

const ContactUs = new mongoose.model("ContactUs", contactUsSchema);

const createDocument = async () => {
  try {
    const snd = new ContactUs({
      name: "Dixit Bohra",
      email: "dixitbohra24@gmail.com",
      message: "You are My best Friend",
    });
    const trd = new ContactUs({
      name: "Yash Donga",
      email: "yashdonga16@gmail.com",
      message: "You are My roommate",
    });
    const foth = new ContactUs({
      name: "Raj Khunt",
      email: "Raj Khunt34@gmail.com",
      message: "You are studymate",
    });
    const fith = new ContactUs({
      name: "Henish Viradiya",
      email: "henishv56@gmail.com",
      message: "You are My workmate",
    });

    const result = await ContactUs.insertMany([snd, trd, foth, fith]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createDocument();

const getDocument = async () =>{
   try{
    const result =await  ContactUs.find({name:"Dixit Bohra"},{name:1});
    console.log(result);
   }catch(err){
       console.log(err);
   }
}
// getDocument();

const getDocs= async()=>{
  try{
    const result =await  ContactUs.find({});
    console.log(result);
   }catch(err){
       console.log(err);
   }
}
// getDocs();