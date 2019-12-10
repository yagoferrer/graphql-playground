import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import query from './query'
import mutation from './mutation'

const server = new GraphQLServer({ 
    typeDefs: './src/schema.graphql', 
    resolvers: {
        Query: query,
        Mutation: mutation
    },
    context: {
        db
    }
})

server.start(() => {
    console.log('The server is up!  http://localhost:4000')
})