const query = {
    me(parent, args, {db}, info) {
       return db.users.find((user) => user.id ==='1')
    },
    allUsers(parent, args, {db}, info) {
        return db.users
    },
}

export default query