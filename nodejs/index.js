
const express = require("express")
const app = express();

app.use(express.json()) // allow node app get data like JSON

const employee = require("./src/route/employee.route") // just import

employee(app) // call function employee

app.listen(8080,()=>{
    console.log("http://localhost:8080")
})