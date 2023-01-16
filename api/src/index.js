const express = require("express")
const cors = require("cors")
const {port} = require("./configuration")


const app = express()


app.use(cors())

app.get("/user", (req, res) => {
    const user = {first_name: "Mykhailo", last_name: "Kulish", age: 22}
    res.json({
        response: true,
        user
    })
})

app.get("/users", (req, res) => {
    const user1 = {first_name: "Olexander", last_name: "Bondar", age: 29}
    const user2 = {first_name: "Mark", last_name: "Vovk", age: 28}
    const users = [user1, user2]
    res.json({
        response: true,
        users
    })
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})