import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
    username: { type: String, required: "Username is required" },
    password:  { type: String, required: "Password is required" },
    postsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    }],
    createdAt: { type: Date, default: Date.now }

});



export default mongoose.models.users || mongoose.model('users', User);