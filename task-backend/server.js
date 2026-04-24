import express from 'express'
import cookieParser from 'cookie-parser'
import auth from './routes/auth.js'
import tasks from './routes/tasks.js'
import cors from 'cors'

if (!process.env.ACCESS_TOKEN_SECRET) {
  throw new Error('ACCESS_TOKEN_SECRET is required')
}

const app = express()
const allowedOrigins = process.env.FRONTEND_ORIGINS
  ? process.env.FRONTEND_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
  : [
      'http://localhost:5173',
      'https://fictional-space-potato-5vq4xjqxvxjp27q57-5173.app.github.dev',
    ]

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true)
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      callback(new Error(`Origin ${origin} not allowed by CORS`))
    },
    credentials: true,
  }),
)

app.use(cookieParser())
app.use(express.json())
const port = process.env.PORT || 3000

app.use('/api/v1/auth', auth)
app.use('/api/v1/tasks', tasks)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})