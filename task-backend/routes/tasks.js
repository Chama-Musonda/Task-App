import { Router } from "express"
const router = Router()
import db from "../src/database.js"
import authenticateJWT from "../middleware/authenticateJWT.js"

router.post('/', authenticateJWT, async (req, res) => {
  const { id, title, description, dueDate, priority, status, assignedTo, parentId } = req.body

  try {
    const task = db.prepare(`
      INSERT INTO tasks (id, title, description, due_date, priority, status, assigned_to, parent_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      RETURNING *
    `).get(id, title, description, dueDate, priority, status, assignedTo, parentId)

    res.status(201).json(task)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/', authenticateJWT, async (req, res) => {
  try {
    const tasks = db.prepare('SELECT * FROM tasks').all()
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params

  try {
    const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id)
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
    const task = db.prepare(`
      UPDATE tasks
      SET title = ?, description = ?, due_date = ?, priority = ?, status = ?, assigned_to = ?, parent_id = ?
      WHERE id = ?
      RETURNING *
    `).get(title, description, dueDate, priority, status, assignedTo, parentId, id)

    res.json(task)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.delete('/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params

  try {
    const result = db.prepare('DELETE FROM tasks WHERE id = ?').run(id)
    res.json({ deleted: result.changes === 1 })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  } 
})

export default router