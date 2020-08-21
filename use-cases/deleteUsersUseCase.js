
const deleteUsersUseCase = async ({ axios }, id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    return {
        status: 204
    }
}

module.exports = deleteUsersUseCase