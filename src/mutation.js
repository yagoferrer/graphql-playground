import uuidv4 from 'uuid'
const mutation = {
    createUser(parent, { data }, { db }, info) {
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
    },
    updateUser(parent, args, { db }, info) {
        const user = db.users.find((user) => user.id === args.id)
        if (!user) {
            throw new Error('User not Found')
        }
       Object.assign(user, args.data)
       return user
    }
}

export default mutation