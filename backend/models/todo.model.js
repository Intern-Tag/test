let supabase = require("../db/config");

class Todo {
  title;
  status;
  createdAt;

  constructor(title, status = "PENDING") {
    this.title = title;
    this.status = status;
  }

  async save() {
    const { data, error } = await supabase
      .from("todos")
      .insert({
        title: this.title,
        status: this.status,
      })
      .select();
    console.log(error);
    return data;
  }

  static async updateStatus(todoId, status) {
    let id = parseInt(todoId);

    const { data, error } = await supabase
      .from("todos")
      .update({ status: status })
      .eq("id", id)
      .select();

    console.log(error);
    return data;
  }

  static async getAll() {
    const { data, error } = await supabase.from("todos").select(`
        id,
        title,
        status,
        created_at,
        subtasks (
            id,
            title,
            status,
            created_at
        )
        `);
    console.log(error);
    return data;
  }
}

module.exports = Todo;
