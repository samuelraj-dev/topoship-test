import express from 'express'
import {
  userLogin,
  userSignup,
} from '../controllers/user.js'

const router = express.Router()

// Login
router.post('/login', userLogin)

// Signup
router.post('/signup', userSignup)

export default router