import express from "express"
import {getData} from "../controllers/DevControllers.js"

const router = express.Router()

router.get('/developer', getData)

export default router