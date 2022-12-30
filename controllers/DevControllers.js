import Developer from "../models/DevModels.js"

export const getData = async (req, res) => {
    try {
        const data = await Developer.find()
        res.json(data)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}