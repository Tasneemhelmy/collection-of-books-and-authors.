import mongoose ,{Schema} from "mongoose";
//import { type } from "os";

const authorSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    bio: String,
    birthDate: Date,
    books:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }
    ]
})
const Author=mongoose.model("Author",authorSchema)

export default Author