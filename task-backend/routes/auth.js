import express from "express"
import db from "../src/database.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()
const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET
if (!JWT_SECRET) {
  throw new Error('ACCESS_TOKEN_SECRET is required')
}

const generateJWT = (user) => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '1h' })
}

router.post('/register', async (req, res) => {
  const { email, password, fullName } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = db.prepare(`
      INSERT INTO users (email, password_hash, full_name)
      VALUES (?, ?, ?)
      RETURNING id, email
    `).get(email, hashedPassword, fullName);

    const token = generateJWT({ id: user.id, email: user.email })

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Set to true in production
      sameSite: 'lax',
      maxAge: 3600000
    })

    res.status(201).json({ message: 'User registered successfully', user: { email: user.email } })
  } catch (error) {
    if (error.message.includes('UNIQUE constraint')) {
      return res.status(400).json({ message: 'Email already exists' })
    }
    console.error(error)
    res.status(500).json({ message: 'Error registering user' })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email)

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash)

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const payload = {
      id: user.id,
      email: user.email
    }

    const token = generateJWT(payload)

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Set to true in production
      sameSite: 'lax',
      maxAge: 3600000
    })

    res.status(200).json({ message: 'Login successful' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error logging in' })
  }
})

export default router