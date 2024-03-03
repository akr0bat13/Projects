import { Sequelize } from 'sequelize'

const DB_NAME = 'online_store'
const DB_USER = 'postgres'
const DB_PASSWORD = '8192'
const DB_HOST = 'localhost'
const DB_PORT = '5432'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
})

export default sequelize

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     dialect: 'postgres',
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//   }
// )
