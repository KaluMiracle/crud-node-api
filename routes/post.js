import { Router } from 'express'
const postsRouter = Router()
import Post from '../models/test.js'

// Getting all
postsRouter.get('/', async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const Posts = await Post.find()
    res.json(Posts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
postsRouter.get('/:id', getPost, (req, res) => {
  res.json(res.Post)
})

// Creating one
postsRouter.post('/', async (req, res) => {
  console.log(req.body)
  
  const Data = new Post({
    ...req.body
  })
  try {
    const newPost = await Data.save()
    res.status(201).json(newPost)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
postsRouter.patch('/:id', getPost, async (req, res) => {

  Object.keys(req.body).forEach((key,index)=>{
    if (req.body[key] != null) {
      res.Post[key] = req.body[key]
    }
  })
  
  try {
    const updatedPost = await res.Post.save()
    res.json(updatedPost)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
postsRouter.delete('/:id', getPost, async (req, res) => {
  try {
    await res.Post.remove()
    res.json({ message: 'Deleted Post' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getPost(req, res, next) {
  let Data
  try {
    Data = await Post.findById(req.params.id)
    if (Data == null) {
      return res.status(404).json({ message: 'Cannot find Post' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.Post = Data
  next()
}

export default postsRouter