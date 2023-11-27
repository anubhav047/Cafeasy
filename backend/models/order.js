const mongoose = require('mongoose')

const { Schema } = mongoose;

const OrderSchema = new Schema({
    number: {
        type: String,
        required: true,
    },
    order_date:{
        type:String,
        required:true
    },
    order_data: {
        type:Object,
        required: true,
    },

});

module.exports = mongoose.model('order', OrderSchema)