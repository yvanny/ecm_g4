
- create nodejs folder
- open nodejs folder
- create index.js in nodejs folder
- open terminal 
> npm init
> npm install express //
- in index.js add 
    const express = require("express")
    const app = express();

    app.get("/",(req,res)=>{
        res.send("Hello Node.js")
    })
    app.get("/test",(req,res)=>{
        res.send("You have request test route!")
    })
    var user = ["Dara","Bona","Sok","Jon"]
    app.get("/user/get-all",(req,res)=>{
        res.send(user)
    })
    app.listen(8080,()=>{
        console.log("http://localhost:8080")
    })
- run 
    > node index.js 
- testing