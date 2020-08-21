
const getUsersUseCase = async ({ axios }) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return {
        status: 200,
        json: data
    }
}

module.exports = getUsersUseCase