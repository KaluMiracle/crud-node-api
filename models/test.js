import mongoose from 'mongoose'

const testSchema = new mongoose.Schema({
  added: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  end_year: {
    type: String,
    required: true
  },
  impact: {
    type: String,
    required: true
  },
  insight: {
    type: String,
    required: true
  },
  intensity: {
    type: String,
    required: true
  },
  likelihood: {
    type: String,
    required: true
  },
  pestle: {
    type: String,
    required: true
  },
  published: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  relevance: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  start_year: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },

  
})

export default mongoose.model('test', testSchema)