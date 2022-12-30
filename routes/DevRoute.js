import express from "express"
import {getData, postData} from "../controllers/DevControllers.js"

const router = express.Router()

router.get('/developer', getData)
router.post('/developer', postData)

export default router