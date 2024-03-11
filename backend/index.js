const express = require('express')
const app = express();



const PORT = 5000;

app.get('/', (req, res) => {
    res.json({ Sucess: "Server Started Successfully" })
})

app.get('/test', (req, res) => {
    res.json({ Sucess: "Server Started Successfully on Test" })
})


app.listen(PORT, () => {
    console.log("Server Started on : " + PORT)
})