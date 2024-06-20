import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new Schema ({
    title: {type: String, required: true, index: true},
    description: {type: String, required: true},
    price: {type: Number, required: true, index: true},
    status: {type: Boolean, required: true, index: true},
    stock: {type: Number, required: true, index: true},
    category: {type: String, required: true, index: true},
    thumbnails: {type: String}
})

productSchema.plugin(mongoosePaginate);

export const ProductModel = model('products', productSchema);