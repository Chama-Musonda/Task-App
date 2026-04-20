import express from 'express'
require('dotenv').config({ path: './secretes.env' })
const db = require('./src/database')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const app = express()
app.use(cookieParser())
app.use(express.json())
const port = process.env.PORT || 3000
const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET

const generateJWT = (user) => {
  const token = jwt.sign(user, JWT_SECRET)
  return token
}

app.post('/api/auth/register', async (req, res) => {
  const { email, password, firstName, lastName } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = await db.run(`
      INSERT INTO users (email, password_hash, full_name)
      VALUES (?, ?, ?)
      RETURNING *
    `, [email, hashedPassword, `${firstName} ${lastName}`])

    const payload = {
      id: user.id,
      email: user.email
    }

    const token = generateJWT(payload)

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 3600000
    })

    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error registering user' })
  }
})

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await db.get(`SELECT * FROM users WHERE email = ?`, [email])

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
      secure: false,
      sameSite: 'lax',
      maxAge: 3600000
    })

    res.status(200).json({ message: 'Login successful' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error logging in' })
  }
})

// JWT middleware
const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ message: 'Unauthorized' })
  }
}


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})