const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const authRouter = require('./authRouter')
const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://nikitanikonrus:qwert12345@cluster0.j2eoibp.mongodb.net/?retryWrites=true&w=majority`
    )
    app.listen(PORT, () => console.log(`server started at ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}
start()
