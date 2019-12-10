import { GraphQLServer } from 'graphql-yoga'


const resolvers = {
    Query: {
        me(parent, args, ctx, info) {
            return {
                id: '1',
                name: 'Yago'
            }
        }
    }
}

const server = new GraphQLServer({ 
    typeDefs: './src/schema.graphql', 
    resolvers
})

server.start(() => {
    console.log('The server is up! got to http://localhost:4000')
})