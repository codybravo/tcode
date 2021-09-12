const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('./models/schema.js')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
const uri = "mongodb+srv://admin:admin@cluster0.hvfsk.mongodb.net/node-data?retryWrites=true&w=majority";


const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(uri,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
})


app.listen(3000,() => {
    console.log("connected to server");
})

app.set('view engine','ejs');

app.get("/",(req,res) => {
    res.redirect("/main")
})
app.get("/main",(req,res) => {
    Note.find()
      .then(result => {
          res.render("main",{note: result});
      })
      .catch(err => {
          console.log(err);
      })
})
app.get("/view/:id",(req,res) => {
    const id = req.params.id;
    Note.findById(id)
        .then(result => {
            res.render('view',{note : result})
        })
        .catch(err => {
            console.log(err);
        })
})
app.get("/create",(req,res) => {
    res.render('create')
})
app.post("/create",(req,res) => {
    const note = new Note(req.body);
    note.save()
        .then((result) => {
            res.redirect("/main");
        })
        .catch((err) => {
            console.log(err);
        })
})
app.delete("/delete/:id",(req,res) => {
    const id = req.params.id;
    Note.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect : "/main"});
        })
        .catch((err) => {
            console.log(err);
        })
})



app.get("/update/:id",(req,res) => {
    const id = req.params.id;
    Note.findById(id)
        .then(result => {
            res.render('update',{note: result});
        })
        .catch(err => console.log(err))
})
