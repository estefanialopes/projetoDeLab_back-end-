import { usuarioRouter } from '@modules/usuario/routes'
import sessionRouter from '@modules/usuario/routes/session.routes'
import { livroRouter } from '@modules/livro/routes'
import { Router } from 'express'

const routes = Router()

routes.use('/usuario', usuarioRouter)
routes.use('/livro', livroRouter)
routes.use('/login', sessionRouter)
export default routes
