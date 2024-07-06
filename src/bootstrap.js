import connected from "../database/connection.js";
import bookRouter from './modules/book/book.route.js'
import authorRouter from './modules/author/author.route.js'

const bootstrap=(app,express)=>{
    process.on('uncaughtException',(err)=>{
        console.log(err)
    })
    connected()
    app.use(express.json());
    app.use('/book',bookRouter)
    app.use('/author',authorRouter)
    app.use('*',(req,res)=>{
        res.status(404).json({message:'Not Found'})
    })
    process.on('unhandledRejection',(err)=>{
        console.log(err)
    })
}

export default bootstrap