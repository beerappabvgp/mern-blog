import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    profilePicture : {
        type : String,
        default : "https://tse1.mm.bing.net/th?id=OIP.SxuyKL-Ca-_bXp1TC4c4-gHaF3&pid=Api&P=0&h=180",
    },
} , {timestamps : true});

const User = mongoose.model('User' , UserSchema);

export default User;