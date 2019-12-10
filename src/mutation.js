import uuidv4 from 'uuid'
const mutation = {
    createUser(parent, {data}, {db}, info) {
        const emailExist = db.users.some((user) => user.email === data.email)

        if (emailExist) {
            throw new Error(`Email ${data.email} exists`)
        }

        const user = {
            id: uuidv4(),
            ...data
        }
        db.users.push(user)
        return user
    }
}

export default mutation