const express = require("express")
const app = express
const port =300

// Root Router
app.get(`/`, (req, res) =>{
res.send("<h1> Hello World"</h1>)
})

app.listen(port, ()=>{
    console.log(`server runs on port ${port}`)
})