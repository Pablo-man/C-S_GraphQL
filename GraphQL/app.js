import express from 'express';
import morgan from 'morgan';
import {graphqlHTTP} from 'express-graphql'
import schema from './graphql/schema.js'

const app= express()

//Settings
app.use((req, res, next)=>{
    res.header(`Access-Control-Allow-Origin`, ['*']);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next()
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))
app.set('port', process.env.PORT || 8080);


//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//Routes


//Starting the serve
app.listen(app.get('port'), ()=>{
    console.log(`SERVER ON PORT ${app.get('port')}`)
})

