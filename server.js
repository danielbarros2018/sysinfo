const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!\n")
});

app.get('/t', (req, res) => {
    res.send("Teste 123!\n")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
