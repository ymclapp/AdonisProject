//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {
  public async index({ view }) {
    const tasks = await Task.all()

    return view.render('tasks.index', { tasks })
  }
}

