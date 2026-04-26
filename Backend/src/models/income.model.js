import mongoose from 'mongoose';

const incomeSchema = new mongoose.Schema({
    user:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
    },
    icon:{
        type:String
    },
     title: { 
        type: String,
        required: true
    }, 
     amount: {
         type: Number,
        required: true 
    },
     category: {
        type:String,
         default: 'General'
     },
      description: { 
        type: String 
    },
       date: { 
        type: Date, 
        default: Date.now
     },
},{timestamps:true})

export const Income = mongoose.model('Income', incomeSchema);