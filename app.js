//Constantes
const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes')

//Setting
const app = express()
app.set('port', process.env.PORT || 8000)
const dboptions = {
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '',
    database : 'node'
}

//Middlewares
app.use(myconn(mysql, dboptions, 'single'))
app.use(express.json())

//Routes
app.get('/', (req, res)=> {
    res.send('Welcome')
})
app.use('/api', routes)

//Server Running
app.listen(app.get('port'), ()=> {
    console.log('Server running on port',  app.get('port'))
})

