const Book = require("../model/Book");

const getAllBooks = async (req, res , next) => {
    let books;
    try {
        books = await Book.find();
    }catch(err) {
        console.log(err);
    }

    if(!books) {
        return res.status(404).json({message:"No products found"})
    }
    return res.status(200).json({books})
};

//Creating a book
const addBook = async(req, res, next) => {
    //destructing it
    const {name, author, description, price, available, image} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        }),
        await book.save();//save function will save the data in the database
    }catch(err){
        console.log(err);
    }

    if(!book) {
        return res.status(500).json({message:'Unable to Add'})
    }
    return res.status(201).json({ book });
}

//get book by Id
const getById = async(req, res, next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }catch(err) {
        console.log(err);
    }

    if(!book) {
        return res.status(404).json({message: "No Book found"});
    }
    return res.status(200).json({book});
}

//update book by id
const updateBook = async(req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save() //Now save this documents
    }catch(err){
        console.log(err);
    }
    if(!book) {
        return res.status(404).json({message: "Unable to Update By this id"});
    }
    return res.status(200).json({book});
}

//deleteBook
const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndDelete(id);
    } catch(err) {
        console.log(err);
    }
    if(!book) {
        return res.status(404).json({message: "Unable to Delete By this id"});
    }
    return res.status(200).json({message:"Book Successfully Deleted"});
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;