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
    },
    deleteUser(parent, args, { db }, info) {
        const userIndex = db.users.findIndex((user) => user.id === args.id)

        if (userIndex === -1) {
            throw new Error('User not found')
        }
        
        const deletedUser = db.users.splice(userIndex, 1)
        return deletedUser[0]
    } 
}

export default mutation