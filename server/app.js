const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb+srv://mukesh_tatrari:H6KmVPPNz2SB4Tyj@cluster0.byos5.mongodb.net/graphql-tut')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000, () => {
    console.log("now listening for requests on port 4000")
})
