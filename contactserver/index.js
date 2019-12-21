// 일종의 main페이지

const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app= express()

app.use(bodyparser.json())
app.use(cors)

//const dbconfig = require('./db.js')
//const mongoose = require('mongoose')

// 비동기 방식이기 때문에 then, catch
// mongoose.connect(dbconfig, {useNewUrlParser:true})
// .then(() => {
//     console.log('DB Connection Success.');
// })
// .catch(err => {
//     console.log('DB Connection Failure.' + err);
// })

// server-side routing
app.get('/', (req, res) => {
    console.log(req);
    res.json({'message' : 'Welcome Node.js!!!'})
})

let port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('Port : ' + port + ' is ready...');
})