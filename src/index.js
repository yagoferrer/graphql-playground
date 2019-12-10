import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import query from './query'
import mutation from './mutation'
import subscrition from './subscription'
import user from './user'

const pubsub = new PubSub()

const server = new GraphQLServer({ 
    typeDefs: './src/schema.graphql', 
    resolvers: {
        Query: query,
        Mutation: mutation,
        Subscription: subscrition,
        User: user
    },
    context: {
        db,
        pubsub
    }
})

server.start(() => {
    console.log('The server is up!  http://localhost:4000')
})