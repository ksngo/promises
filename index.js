const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/static',express.static(path.join(__dirname,'examples')))


app.get('/', (req, res)=>{
    res.send("hello")
})

app.listen(port, ()=>{
    console.log("App listening at port 3000.")
})