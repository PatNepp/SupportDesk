const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        //ned a 'ref' so we know where to get objectId
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserSchema'
    },
    product: {
        type: String,
        required: [true, 'Please select a product'],
        enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a description of the issue']
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Ticket', ticketSchema)