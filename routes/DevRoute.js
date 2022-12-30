import express from "express"
import {deleteData, getData, postData, updateData} from "../controllers/DevControllers.js"

const router = express.Router()

router.get('/developer', getData)
router.post('/developer', postData)
router.patch('/developer/:id', updateData)
router.delete('/developer/:id', deleteData)

export default router