import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'
import TaskValidator from 'App/validators/Task'

export default class TasksController {
  public async index({ view }: HttpContextContract) {
    const tasks = await Task.all()

    return view.render('tasks.index', { tasks })
  }

  public async store({ request, session, response }: HttpContextContract) {
    const data = await request.validate(TaskValidator)

    await Task.create(data)

    session.flash({ notification: 'Task added!' })

    return response.redirect('back')
  }
}
