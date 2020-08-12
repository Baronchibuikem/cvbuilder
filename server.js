const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const consign = require("consign");
const path = require("path")

// importing our routers
const users = require("./routes/api/users")
const profile = require("./routes/api/profile")
const post = require("./routes/api/post")

// load config
dotenv.config({path: './config/config.env'})

// connectDB()

const app = express();

// Dev logging
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}

app.use(cors());
app.use(bodyParser.json())

// consign()
//     .include("models")
//     .then("routes")
//     .then("db")
//     .into(app)


// use routes
app.use("/api/users", users)
app.use("/api/posts", post)
app.use("/api/profile", profile)

const port = process.env.PORT || 6000

app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_ENV} on port ${port}`)
})