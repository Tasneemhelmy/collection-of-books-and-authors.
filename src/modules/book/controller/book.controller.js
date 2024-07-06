import Book from "../../../../database/models/book.model.js"
import asyncHandler from "../../../middleware/asyncHandels.js"

//• POST request to create a new book.
export const addBook=asyncHandler(async(req,res,next)=>{
    const book =await Book.insertMany(req.body)
    res.status(201).json({message:"Book Added",book})
})

//-----------------------------------------------------------------------

//GET request to retrieve all books.
export const allBooks=asyncHandler(async(req,res,next)=>{
    const book=await Book.find()
    if(!book.length) res.status(409).json({message:"Not Found Books"})
    res.status(200).json({message:"done",book})
})
//---------------------------------------------------------------

//GET request to retrieve a single book by its ID.
export const getBook=asyncHandler(async(req,res,next)=>{
    const book=await Book.findById(req.params.id).select('author title content')
    if(!book) res.status(409).json({message:"Not Found Book"})
        res.status(200).json({message:"done",book})
})
//------------------------------------------------------------------------------

//PATCH request to update a book by its ID.
export const updateBook=asyncHandler(async(req,res,next)=>{
    const {content}=req.body
    const book=await Book.findByIdAndUpdate(req.params.id,{content},{new:true})
    if(!book) res.status(409).json({message:"Not Found Book By This ID"})

    res.status(200).json({message:"Ubdated",book})

})
//--------------------------------------------------------------------------------
//DELETE request to delete a book by its ID.
export const deleteBook=asyncHandler(async(req,res,next)=>{
    const book=await Book.findByIdAndDelete(req.params.id)
    if(!book) res.status(409).json({message:"Not Found a Book By This ID"})

    res.status(200).json({message:"Deleted",book})

})
//----------------------------------------------------------------------------------

//Implement search functionality to filter books by title or author,
export const bookByTitle=asyncHandler(async(req,res,next)=>{
    const {title}=req.body
    const books= await Book.find({title}).select('title content')
    if(!books.length) res.status(409).json({message:"Not Found Books"})
    res.status(200).json({message:"done",books})
})