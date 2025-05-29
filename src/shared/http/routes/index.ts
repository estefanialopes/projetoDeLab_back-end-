import { usuarioRouter } from '@modules/usuario/routes'
import sessionRouter from '@modules/usuario/routes/session.routes'
import { livroRouter } from '@modules/livro/routes'
import { Router } from 'express'
import editoraRouter from '@modules/editora/routes/editora.routes'
import exemplarRouter from '@modules/exemplar/routes/exemplar.routes'
import emprestimoRouter from '@modules/emprestimo/routes/emprestimo.routes'

const routes = Router()

routes.use('/usuario', usuarioRouter)
routes.use('/livro', livroRouter)
routes.use('/login', sessionRouter)
routes.use('/editora', editoraRouter)
routes.use('/exemplar', exemplarRouter)
routes.use('/emprestimo', emprestimoRouter)
export default routes
