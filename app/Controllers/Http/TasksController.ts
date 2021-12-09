//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// remember to reference the Task model at the top
const Task = use('App/Models/Task')

async index({ view }) {
  const tasks = await Task.all()

  return view.render('tasks.index', { tasks: tasks.toJSON() })
}


