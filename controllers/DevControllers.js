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

export const updateData = async (req, res) => {
    try {
        const updateData = await Developer.updateOne(
            {_id: req.params.id}, 
            {$set: req.body}
            )
    res.status(200).json(updateData)
    }catch(error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteData = async (req, res) => {
    try {
    const deletedata = await Developer.deleteOne(
    {_id: req.params.id}
    )
    res.status(200).json(deletedata)
    }catch(error) {
    res.status(400).json({message: error.message})       
    }
}