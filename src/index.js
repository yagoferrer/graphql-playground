import { GraphQLServer } from 'graphql-yoga'
import db from './db'

const resolvers = {
    Query: {
        me(parent, args, ctx, info) {
           return db.users.find((user) => user.id ==='1')
        }
    }
}

const server = new GraphQLServer({ 
    typeDefs: './src/schema.graphql', 
    resolvers
})

server.start(() => {
    console.log('The server is up!  http://localhost:4000')
})