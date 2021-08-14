import mongoose from 'mongoose';
const { ObjectId} = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true,
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    categoryId:{
        type: ObjectId,
        ref :"Category",
        required:false,
    },
    
},
    { timestamps: true, })
module.exports = mongoose.model('Product', productSchema)