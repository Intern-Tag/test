export const fetchData = async (endpoint, method, body, finalResponse = {}) => {
  try {
    const response = await fetch(endpoint, {
      method: method,
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const { data } = await response.json();
    finalResponse[data] = data;

    return finalResponse;
  } catch (error) {
    return finalResponse;
  }
};

export const handleGetTodos = async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/todo`, {
      method: "get",
    });
    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    return false;
  }
};

export const handleCreateTodos = async (todo) => {
  try {
    console.log(todo);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(`http://localhost:3001/api/v1/todo`, {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify({
        title: todo,
      }),
    });
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    return false;
  }
};

export const handleCreateSubTodos = async (subTodo, mainTaskId) => {
  try {
    console.log(subTodo);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(
      `http://localhost:3001/api/v1/todo/${mainTaskId}/subtask`,
      {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify({
          title: subTodo,
        }),
      }
    );
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    return false;
  }
};

export const handleMainCheckedBoxTodos = async (id,value) => {
    console.log("value : ", value)
    //*****check if the status is on then set it to COMPLETED else PENDING */
     let status =  value === true ? "COMPLETED" : "PENDING";
    try{
        console.log("Status : ",status)
        const response = await fetch (
            `http://localhost:3001/api/v1/todo/${id}`,
            {
                method:"PATCH",
                headers: { 
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    status:status
                  }),
            }
        )
        const data = await response.json()

        console.log(data)

        return data;
    } catch (error) {
        return false
    }
}


export const handleSubCheckedBoxTodos = async (subtaskId,value) => {
    console.log("value : ", value)
    //*****check if the status is on then set it to COMPLETED else PENDING */
     let status =  value === true ? "COMPLETED" : "PENDING";
    try{
        console.log("Id : ",subtaskId)
        const response = await fetch (
            `http://localhost:3001/api/v1/subtask/${subtaskId}`,
            {
                method:"PATCH",
                headers: { 
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    status:status
                  }),
            }
        )
        const data = await response.json()

        console.log(data)

        return data;
    } catch (error) {
        return false
    }
}
