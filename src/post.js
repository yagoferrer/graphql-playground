const post = {
    author(parent, args, {db}, info) {
        return db.users.find((user) => parent.author === user.id)
    }
}

export default post