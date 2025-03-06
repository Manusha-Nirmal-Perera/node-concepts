require('dotenv').config()
const {ApolloServer} = require('@apollo/server');
const {startStandaloneServer} = require('@apollo/server/standalone');
const connectToDB = require('./database/db')
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');


async function startServer() {

    await connectToDB()
    // create server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })
    // start server
    const {url} = await startStandaloneServer(server, {
        listen: {port: process.env.PORT}
    })

    console.log(`Server ready at: ${url}`);
    
}

// invoke method
startServer()