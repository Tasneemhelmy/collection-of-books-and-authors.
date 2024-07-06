import asyncHandler from "../../../middleware/asyncHandels.js";
import Author from "../../../../database/models/author.model.js";


//POST request to create a new author.
export const createAuthor = asyncHandler(async (req, res) => {
    const author=await Author.insertMany(req.body)
    res.status(201).json({message:"Author created successfully",author});
})
//-------------------------------------------------------------

//GET request to retrieve all authors.
export const getAllAuthors = asyncHandler(async (req, res) => {
    const authors = await Author.find();
    if(!authors.length)  
        res.status(409).json({message:"Not Found Authors"});
    res.status(200).json({message:"Done",authors});  
})
//----------------------------------------------------------

//GET request to retrieve a single author by its ID.
export const getAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.id);
    if(!author)  
        res.status(409).json({message:"Not Found Author"});
    res.status(200).json({message:"Done",author});
})
//-------------------------------------------------------------

//PATCH request to update an author by its ID.
export const updateAuthor=asyncHandler(async(req,res,next)=>{
    const {bio}=req.body
    const author=await Author.findByIdAndUpdate(req.params.id,{bio},{new:true})
    if(!author) res.status(409).json({message:"Not Found Author By This ID"})

    res.status(200).json({message:"Ubdated",author})

})
//-----------------------------------------------------------

//• DELETE request to delete an author by its ID.
export const deleteAuthor=asyncHandler(async(req,res,next)=>{
    const author=await Author.findByIdAndDelete(req.params.id)
    if(!author) res.status(409).json({message:"Not Found a Author By This ID"})

    res.status(200).json({message:"Deleted",author})

})
//-----------------------------------------------------------

//Add pagination to the GET endpoints for retrieving all books and authors.
export const authorWithBooks=asyncHandler(async(req,res,next)=>{
    //console.log('hi')
    const author= await Author.find().populate({
        path:'books',
        select:'title content'
    })
    if(!author.length) res.status(409).json({message:"Not Found a Author By This"})

    res.status(200).json({message:"Done",author})
})
//--------------------------------------------------------------

//authors by name or bio.
export const authorByName=asyncHandler(async(req,res,next)=>{
    const {name}=req.body
    const author= await Author.find({name}).select('name bio')
    if(!author.length) res.status(409).json({message:"Not Found a Author By This name"})
    res.status(200).json({message:"Done",author}) 


})

