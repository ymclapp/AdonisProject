//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TaskController {
  public async index({ view }) {
    const tasks = await Task.all()

    return view.render('tasks.index', { tasks })
  }
}
// remember to reference the Task model at the top
//const Task = use('App/Models/Task')

//class TaskController {

//async index({ view }) {
// const tasks = await Task.all()

//  return view.render('tasks.index', { tasks: tasks.toJSON() })
//}
