import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('assigned_to')
      table.boolean('is_completed').defaultTo(0)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}