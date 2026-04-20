import express from 'express'
require('dotenv').config({ path: './secretes.env' })
const cookieParser = require('cookie-parser')
const auth = require('./routes/auth')
const tasks = require('./routes/tasks')

const app = express()
app.use(cookieParser())
app.use(express.json())
const port = process.env.PORT || 3000

app.use('/api/v1/auth', auth)
app.use('/api/v1/tasks', tasks)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})