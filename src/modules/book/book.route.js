import { Router} from "express";
import * as controllerBook from './controller/book.controller.js'

const router=Router()
router.post('/',controllerBook.addBook)
router.get('/',controllerBook.allBooks)
router.get('/bookBYTitle',controllerBook.bookByTitle)
router.get('/:id',controllerBook.getBook)
router.patch('/:id',controllerBook.updateBook)
router.delete('/:id',controllerBook.deleteBook)

export default router