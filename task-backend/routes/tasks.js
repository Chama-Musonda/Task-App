import { Router } from "express"
const router = Router()
import db from "../src/database"
import authenticateJWT from "../middleware/authenticateJWT"

router.post('/', authenticateJWT, async (req, res) => {
  const { id, title, description, dueDate, priority, status, assignedTo, parentId } = req.body

  try {
    const task = await db.run(`
      INSERT INTO tasks (id, title, description, due_date, priority, status, assigned_to, parent_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      RETURNING *
    `, [id, title, description, dueDate, priority, status, assignedTo, parentId])

    res.status(201).json(task)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/', authenticateJWT, async (req, res) => {
  try {
    const tasks = await db.all('SELECT * FROM tasks')
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params

  try {
    const task = await db.get('SELECT * FROM tasks WHERE id = ?', [id])
    res.json(task)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.patch('/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params
  const { title, description, dueDate, priority, status, assignedTo, parentId } = req.body

  try {
    const task = await db.run(`
      UPDATE tasks
      SET title = ?, description = ?, due_date = ?, priority = ?, status = ?, assigned_to = ?, parent_id = ?
      WHERE id = ?
    `, [title, description, dueDate, priority, status, assignedTo, parentId, id])

    res.json(task)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.delete('/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params

  try {
    const task = await db.run('DELETE FROM tasks WHERE id = ?', [id])
    res.json(task)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  } 
})