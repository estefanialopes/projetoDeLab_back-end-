import { Router } from 'express'
import { LivroController } from '@modules/livro/controllers'
import { celebrate, Joi, Segments } from 'celebrate'
import { isAuthenticated } from '@shared/http/middlewares/AuthMiddleware'

export const livroRouter = Router()
const livroController = new LivroController()

livroRouter.get('/', isAuthenticated, livroController.getLivros)

livroRouter.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required()
    }
  }),
  livroController.getLivro
)

livroRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      titulo: Joi.string().required(),
      autor: Joi.string().required(),
      edicao: Joi.string().required(),
      anoPublicacao: Joi.string().required(),
      idEditora: Joi.string().required(),
      idGenero: Joi.string().required(),
    }
  }),
  livroController.createLivro
)

livroRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    },
    [Segments.BODY]: {
      titulo: Joi.string().optional(),
      autor: Joi.string().optional(),
      edicao: Joi.string().optional(),
      anoPublicacao: Joi.string().optional(),
      idEditora: Joi.string().optional(),
      idGenero: Joi.string().optional(),
    }
  }),
  livroController.updateLivro
)

livroRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  livroController.deleteLivro
)

export default livroRouter
