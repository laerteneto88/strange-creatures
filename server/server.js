
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
   res.send('Some cool homepage here!');
})

const MongoClient = require('mongodb').MongoClient

// Connection URI
const uri ="mongodb://myUserAdmin:myUserAdmin@localhost:27017/";

app.get('/criatures/read', function (req, res) {
   MongoClient.connect(uri, function (err, client) {
      if (err) throw err
      const db = client.db('mydb')
      db.collection('criatures').find().toArray(function (err, result) {
        if (err) throw err
        res.send(JSON.stringify(result))
      })
    })
})

const server = app.listen(8081, function () {
  const host = server.address().address
  const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})