const express=require('express');
const chalk=require ('chalk');
const path=require('path');
var app= new express();
var nav=[{link:'/books', title:'Books'},
{link:'/authors',title:'Authors'}]

const booksrouter=require('./src/routes/bookRoutes.js')(nav);
app.use(express.static(path.join(__dirname,"public")))
app.use('/books',booksrouter);

app.set('views','./src/views');
app.set('view engine', 'ejs');


app.get('/',function(req, res){
    res.render('index.ejs',
    {
        nav,
        title:"Library"
    }
);});





    app.listen(3000, function(){
        console.log('listening to port '+chalk.green('3000'));
   
})