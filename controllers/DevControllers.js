import Developer from "../models/DevModels.js"

export const getData = async (req, res) => {
    try {
        const data = await Developer.find()
        res.json(data)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const postData = async (req, res) => {
    const dataDev = new Developer(req.body)
    try {
        const postData = await dataDev.save()
        res.status(201).json(postData)
    }catch(error) {
        res.status(400).json({message: error.message})
    }
}