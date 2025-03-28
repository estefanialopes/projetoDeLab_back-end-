import dotenv from 'dotenv'

dotenv.config({ path: './.env' })
const { JWT_SECRET } = process.env

export const JWT_SECRET_KEY = JWT_SECRET?.toString() ?? ''
