import express, { NextFunction, Request } from 'express'
import cors from 'cors'
import 'express-async-errors'
import routes from './routes'
import initializeDatabase  from '@config/typeorm/typeorm.config'
import ErrorHandler from '@shared/utils/errors/errorHandler'
import { errors } from 'celebrate'

const PORT = 8080

const app = express()


initializeDatabase()
.then(() => {
  console.log('Conexão com o banco estabelecida.')
})
.catch((err) => {
  console.error('Erro ao conectar com o banco de dados.', err)
})

app.use(cors())
app.use(express.json())

app.use(routes)

app.use(errors());

app.use((error: Error, request: Request, response: any, next: NextFunction ) => {
    if(error instanceof ErrorHandler) {
      return response
        .status(error.statusCode)
        .json({
          message: error.message
        })
    }

    console.log('erro 500 -> ', error)
    return response
      .status(500)
      .json({
        message: 'Server Error!'
      })
})

app.listen(PORT, () => {
  console.log('Servidor aberto na porta:',PORT)
})
