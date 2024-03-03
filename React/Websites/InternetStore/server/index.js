import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
// const sequelize = require('./bd')
import sequelize from './bd.js'

const PORT = process.env.PORT || 3000

const app = express()

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Сервер стартовал на порте ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
