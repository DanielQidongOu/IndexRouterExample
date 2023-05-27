const express = require('express')

const cors = require('cors')

const router = require('./router')

const app = express()
app.use(express.json())

app.use(cors());

app.use('/api', router);

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('server running on 8080')
})
