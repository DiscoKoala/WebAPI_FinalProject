import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Messages from './dbMessages.js'


const app = express()
const port = process.env.PORT || 9000
const connection_url ="mongodb+srv://WesleyB:Mongoose85@cluster0.p9iklke.mongodb.net/messagingDB?retryWrites=true&w=majority"

// Middleware
app.use(express.json())
app.use(Cors())

// DB config
mongoose.connect(connection_url); 

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hello There Friend"))
app.post('/messages/new', (req,res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else{ 
            res.status(200).send(data)
        }
    })
})
app.get('/message/sync', (req,res) => {
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.listen(port, () => console.log('Listening on localhost: ${port}'))