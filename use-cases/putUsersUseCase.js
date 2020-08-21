
const putUsersUseCase = async ({ axios }, body, id) => {
    await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body)
    return {
        status: 204
    }
}

module.exports = putUsersUseCase