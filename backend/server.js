const express = require('express')
const app = express()
const helmet = require('helmet')
require("dotenv").config()
const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(helmet())
app.use(express.urlencoded({extended: true}));
require("./db/db.js")
const port = 3000 || 3001


app.use(require("./routes/Blog.js"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))