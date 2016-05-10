var express = require('express');
var app = express();

var port = process.env.PORT || 3000;


var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req,res) {
        var query = {};
        if(req.query.genre) {
            query.genre = req.query.genre;
        }
        Book.find(query,function(err,books){
        if(err)
            res.status(500).send(err);
        else
            res.json(books);
        })
});

bookRouter.route('Books/:bookId')
    .get(function(req,res) {

        Book.findById(req.params.bookId,function(err,books){
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        })
    });


app.use('/recycle',bookRouter);

app.get('/',function(req,res) {
    res.send("Welcome to api")
});

app.listen(port,function(){
    console.log('gulp is running on port '+port);
})