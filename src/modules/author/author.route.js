import { Router } from "express"
import * as controllerAuthor from './controller/author.controller.js'

const router=Router()
router.post('/',controllerAuthor.createAuthor)

router.get('/',controllerAuthor.getAllAuthors)
router.get('/authorWithBooks',controllerAuthor.authorWithBooks)
router.get('/authorByName',controllerAuthor.authorByName)
router.get('/:id',controllerAuthor.getAuthor) 

router.patch('/:id',controllerAuthor.updateAuthor) 
router.delete('/:id',controllerAuthor.deleteAuthor) 



export default router