let supabase = require('../db/config')

class Subtask {
  title
  status
  createdAt

  constructor (title, status = 'PENDING') {
    this.title = title
    this.status = status
  }

  async save (todoId) {
    const { data, error } = await supabase
      .from('subtasks')
      .insert({
        title: this.title,
        status: this.status,
        todo_id: todoId
      })
      .select()
    console.log(error)
    return data
  }

  static async updateStatus (subtaskId, status) {
    let id = parseInt(subtaskId)

    const { data, error } = await supabase
      .from('subtasks')
      .update({ status: status })
      .eq('id', id)
      .select()

    // uncheck main task if any subtask is marked pending
    if (!error && status === 'PENDING' && data && data[0]?.todo_id) {
      console.log('un-checking main task', data[0].todo_id)
      const todoId = parseInt(data[0].todo_id);
      const updateResult = await supabase
        .from('todos')
        .update({ status: status })
        .eq('id', todoId)
        .select()

      console.log(updateResult.data)
    }

    console.log(error)
    return data
  }
}

module.exports = Subtask
