import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { isAuthenticated } from '@shared/http/middlewares/AuthMiddleware'
import { EditoraController } from '../controllers'

export const editoraRouter = Router()
const editoraController = new EditoraController()

editoraRouter.get('/', isAuthenticated, editoraController.getEditoras)

editoraRouter.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  editoraController.getEditora
)

editoraRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      endereco: Joi.string().required(),
      email: Joi.string().required(),
      telefone: Joi.string().required(),
    }
  }),
  editoraController.createEditora
)

editoraRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    },
    [Segments.BODY]: {
      nome: Joi.string().optional(),
      endereco: Joi.string().optional(),
      email: Joi.string().optional(),
      telefone: Joi.string().optional(),
    }
  }),
  editoraController.updateEditora
)

editoraRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  editoraController.deleteEditora
)

export default editoraRouter
