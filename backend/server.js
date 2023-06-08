import express from "express";

const PORT = 5000;

const app = express()

app.get('/', (req, res) => res.send('hit'))
app.listen(PORT, () => console.log(`started at ${PORT}`))