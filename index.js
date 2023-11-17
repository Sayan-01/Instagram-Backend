const express = require("express");
const path = require("path");
const app = express();
const instaData = require("./data.json");   //data require, fome of a js obj

let port = 3000;

app.listen(port, ()=> {
    console.log("app listening");
});             //ai porjonto compalsary

app.use(express.static(path.join(__dirname, "/public")));   //public path ke static koraholo
app.set("view engine", "ejs");  //view engine hisabe ejs set kora holo
app.set("views", path.join(__dirname, "/views"));   //view path ke static koraholo

app.get("/", (req, res)=> {
    res.render("home.ejs")
});             //home page ar render ki hobe set kora

app.get("/ig/:username", (req, res)=> {     //ig page ar render ki hobe set kora
    let {username} = req.params;    //username a rout save holo
    let data = instaData[username];   //amader sompurno database ar data ar dorkar nai, kabol j username variable 
                                            //ta params hisabe deoa hobe kebol sei user ar data ta proyojon 
    if(data) {
        res.render("sayan.ejs", {data}); //ekhane data lekhar karon ai data 0bj ar key ta ejs a use korbo
    } else {
        res.render("err.ejs")
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/post", (req, res)=> {
    let {name} = req.query;         //input a ja input dea request pathano holo ta req.query te save hoy
    let data = instaData[name];   //amader sompurno database ar data ar dorkar nai, kabol j username variable 
    if(data) {
        res.render("sayan.ejs", {data}); 
    } else {
        res.render("err.ejs")
    }
})


