const query = {
    me(parent, args, {db}, info) {
       return db.users.find((user) => user.id ==='1')
    }
}

export default query