import uuidv4 from 'uuid'
const mutation = {
    createUser(parent, args, {db}, info) {
        const emailExist = db.users.some((user) => user.email === args.data.email)

        if (emailExist) {
            throw new Error(`Email ${args.data.email} exists`)
        }

        const user = {
            id: uuidv4(),
            ...args.data
        }
        db.users.push(user)
        return user
    }
}

export default mutation