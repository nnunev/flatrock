const express = require('express') ;
const { graphql } = require('graphql');
require('dotenv').config();
const port = process.env.PORT || 5000;
const {graphqlHTTP} = require ('express-graphql');

const schema = require('./schema/schema');
const app = express();
app.use(
    '/graphql', 
    graphqlHTTP({ 
        schema: schema,
        graphiql: process.env.NODE_ENV === 'development'
}))

//use(path: "/graphql", ...handlers: RequestHandler<{}, any, any, qs.ParsedQs, Record<string, any>>[]): Express

app.listen(port, console.log(`server on ${port}`))