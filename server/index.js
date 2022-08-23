const express = require('express') ;
const cors = require('cors');
const { graphql } = require('graphql');
const colors = require('colors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const {graphqlHTTP} = require ('express-graphql');
const connectDB = require('./config/db')
const schema = require('./schema/schema');
const app = express();

connectDB()

app.use(cors());

app.use(
    '/graphql', 
    graphqlHTTP({ 
        schema: schema,
        graphiql: process.env.NODE_ENV === 'development'
}))



app.listen(port, console.log(`server on ${port}`))