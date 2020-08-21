
const postUsersUseCase = async ({ axios }, body) => {
    const { data } = await axios.post(`https://jsonplaceholder.typicode.com/users`, body)
    return {
        status: 201,
        json: data
    }
}

module.exports = postUsersUseCase