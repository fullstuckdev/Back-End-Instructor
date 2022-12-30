import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from "./routes/DevRoute.js"

const app = express()
mongoose.connect('mongodb://localhost:27017/restfullvocasia', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log("Database berhasil terkoneksi"))

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(5000, () => console.log("Berjalan pada port 5000"))