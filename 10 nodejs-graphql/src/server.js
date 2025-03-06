const {ApolloServer} = require('@apollo/server');
const {startStandaloneServer} = require('@apollo/server/standalone');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');


async function startServer() {
    // create server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })
    // start server
    const {url} = await startStandaloneServer(server, {
        listen: {port: 4000}
    })

    console.log(`Server ready at: ${url}`);
    
}

// invoke method
startServer()