import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET
if (!JWT_SECRET) {
  throw new Error('ACCESS_TOKEN_SECRET is required')
}

const authenticateJWT = (req, res, next) => {
  const token = req.cookies?.token

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

export default authenticateJWT