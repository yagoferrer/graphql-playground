const query = {
    me(parent, args, {db}, info) {
       return db.users.find((user) => user.id ==='1')
    },
    allUsers(parent, args, {db}, info) {
        return db.users
    },
    getUserByName(parent, {name}, {db}, info) {
        return db.users.find((user) => user.name.toLocaleLowerCase() === name.toLocaleLowerCase())
    }
}

export default query