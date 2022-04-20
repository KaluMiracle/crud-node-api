import mongoose from 'mongoose'

const Post = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },

  
})

export default mongoose.model('Post', Post)