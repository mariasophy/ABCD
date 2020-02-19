var express=require('express');
var booksrouter =express.Router();

function router(nav){
var books=[
    {
        title:"War and Peace",
        author:"Leo Tolstoy"
    },
    {
        title:"Les Miserables",
        author:"Victor Hugo"
    },
    {
        title:"Alice in Wonderland",
        author:"Charles Dickens"
    },
    {
        title:"Sherlock Holmes",
        author:"Arthur Conan Doyle"
    }
];

booksrouter.route('/')
.get((req,res)=>{
    res.render('books',
    {
        nav,
        title:"Books",books
    } );
});

booksrouter.route('/:id')
.get((req,res)=>{
    const id=req.params.id;
    res.render('book',
    {
    nav,
        title:"Books",book:books[id]
    });
});
return booksrouter;
}
module.exports=router;