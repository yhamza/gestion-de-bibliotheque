const mongoose=require('mongoose')


//admin model
const adminSchema=new mongoose.Schema(
    {
        email:{type:String,required:true},
        password:{type:String ,required: true},
    }
)

//export admin
const   Admin= mongoose.model('admins',adminSchema);
module.exports=Admin;
