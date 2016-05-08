var express = require('express');
var app = express();

var port = process.env.PORT || 3000;


var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req,res) {
        if(err)
            console.log(err)
        else
            res.json(books);
    
});

app.use('/recycle',bookRouter);

app.get('/',function(req,res) {
    res.send("Welcome to api")
});

app.listen(port,function(){
    console.log('gulp is running on port '+port);
})