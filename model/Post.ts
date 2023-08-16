import mongoose from "mongoose";
const { Schema } = mongoose;


const Post = new Schema({
    caption: { type: String },
    image: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    createdAt: { type: Date, default: Date.now }

});


export default mongoose.models.posts || mongoose.model('posts', Post);