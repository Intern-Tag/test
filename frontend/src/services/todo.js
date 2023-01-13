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
    } catch (error) {
        return false
    }
}