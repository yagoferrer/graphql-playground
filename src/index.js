import { GraphQLServer } from 'graphql-yoga'

const  typeDefs = `
type Query {me: User!}

type User{
    id: ID!
    name: String!
}
`
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

const server = new GraphQLServer({ typeDefs, resolvers})

server.start(() => {
    console.log('The server is up! got to http://localhost:4000')
})