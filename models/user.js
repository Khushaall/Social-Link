const mongoose =require('mongoose');

// const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/miniapp';

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected successfully'))
// .catch(err => console.error('MongoDB connection error:', err));

mongoose.connect("mongodb://localhost/ink");


const userSchema= mongoose.Schema({
    username:String,
    name: String,
    age: Number,
    password: String,
    email: String,
    profilepic:{
        type:String,
        default:"default.webp"

    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
})

module.exports = mongoose.model('user' , userSchema);