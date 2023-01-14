export const fetchData = async (
    endpoint,
    method,
    body,
    finalResponse = {}
) => {
    try {
        const response = await fetch(endpoint, {
            method: method,
            body: body,
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        } )

        const {data} = await response.json()
        finalResponse[data] = data

        return finalResponse
    } catch(error) {
        return finalResponse;
    }
}

export const handleGetTodos = async () => {

    try{
        const response = await fetch (
            `http://localhost:3001/api/v1/todo`,
            {
                method:"get",
            }
        )
        const data = await response.json()

        console.log(data)

        return data;
    } catch (error) {
        return false
    }
}

// export const handleGetSubTodos = async () => {

//     try{
//         const response = await fetch (
//             `http://localhost:3001/api/v1/todo`,
//             {
//                 method:"get",
//             }
//         )
//         const data = await response.json()

//         console.log(data)

//         return data;
//     } catch (error) {
//         return false
//     }
// }

export const handleCreateTodos = async (todo) => {
// const body = {
//     title: todo
// }
    try{
         console.log(todo)
         var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

        const response = await fetch (
            `http://localhost:3001/api/v1/todo`,
            {
                method:"post",
                headers:myHeaders,
                body: JSON.stringify({
                    "title": todo
                  })
            }
        )
        const data = await response.json()

        console.log(data)
        return data
    } catch (error) {
        return false
    }
}

export const handleCreateSubTodos = async (subTodo,subTaskId) => {
        try{
             console.log(subTodo)
             var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
            const response = await fetch (
                `http://localhost:3001/api/v1/todo/2/subtask`,
                {
                    method:"post",
                    headers:myHeaders,
                    body: JSON.stringify({
                        "title": subTodo,
                        "todo_id":subTaskId
                      })
                }
            )
            const data = await response.json()
    
            console.log(data)
            return data
        } catch (error) {
            return false
        }
    }