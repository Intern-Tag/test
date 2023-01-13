let supabase = require("../db/config");

class Subtask {
  title;
  status;
  createdAt;

  constructor(title, status = "PENDING") {
    this.title = title;
    this.status = status;
  }

  async save(todoId) {
    const { data, error } = await supabase
      .from("subtasks")
      .insert({
        title: this.title,
        status: this.status,
        todo_id: todoId,
      })
      .select();
    console.log(error);
    return data;
  }

  static async updateStatus(subtaskId, status) {
    let id = parseInt(subtaskId);

    const { data, error } = await supabase
      .from("subtasks")
      .update({ status: status })
      .eq("id", id)
      .select();

    console.log(error);
    return data;
  }
}

module.exports = Subtask;
