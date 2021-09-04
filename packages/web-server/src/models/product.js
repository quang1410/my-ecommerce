const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    title:String,
    price:Number,
    image01:String,
    image02:String,
    categorySlug:String,
    description:String,
    colors:[String],
    sizes:[String],
    quantitySizeOfEachColor:[{
        color:String,
        quantityOfEachSize:[{}],
    }],
    slug:String
},{
    timestamps:true
})

module.exports = mongoose.model('products',ProductSchema)