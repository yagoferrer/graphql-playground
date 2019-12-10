import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import query from './query'

const server = new GraphQLServer({ 
    typeDefs: './src/schema.graphql', 
    resolvers: {
        Query: query
    },
    context: {
        db
    }
})

server.start(() => {
    console.log('The server is up!  http://localhost:4000')
})