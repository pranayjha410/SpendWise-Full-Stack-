import mongoose from 'mongoose';

const incomeSchema = new mongoose.Schema({
    userid:{
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
     source: {
        type:String,
        required:true
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