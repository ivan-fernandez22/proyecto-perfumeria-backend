import { Schema, model } from "mongoose";

const productSchema = new Schema ({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    status: {type: Boolean, required: true},
    stock: {type: Number, required: true},
    category: {type: String, required: true},
    thumbnails: {type: String}
})

export const ProductModel = model('products', productSchema);