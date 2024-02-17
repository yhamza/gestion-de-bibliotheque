const mongoose=require('mongoose')


//book model
const bookSchema=new mongoose.Schema(
    {
        title:{type:String,required:true},
        author:{type:String},
        publishedYear:{type:Number},
        genre:{type:String}
    }
)

//export book model
const Book= mongoose.model('Books',bookSchema);
module.exports=Book;
