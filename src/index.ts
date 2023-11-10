import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './typeDefs/index.js'; //has to be .js extension or module won't be found in dist directory ¯\_(ツ)_/¯
import resolvers from './resolvers/index.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
const { url } = await startStandaloneServer(server, {
listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);